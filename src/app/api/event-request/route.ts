import nodemailer from 'nodemailer';

import {
  getRequestConfig,
  getRequestEmailLines,
  isValidEventRequest,
} from '@/shared/config/eventRequest';

export const runtime = 'nodejs';

const maxBodyBytes = 16384;
const invalidMessage = 'Проверьте заполнение полей заявки.';
const unavailableMessage = 'Не удалось отправить заявку. Попробуйте ещё раз или позвоните в Aura.';

async function readPayload(request: Request): Promise<unknown> {
  if (!request.body) throw new Error('Missing body');

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBodyBytes) {
        await reader.cancel();
        throw new Error('Body too large');
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  const allowedOrigin = new URL(process.env.SITE_URL || request.url).origin;

  if (origin !== allowedOrigin) {
    return Response.json(
      { message: 'Отправьте заявку через форму на сайте Aura.' },
      { status: 403 }
    );
  }

  if (request.headers.get('content-type')?.split(';')[0].trim() !== 'application/json') {
    return Response.json({ message: invalidMessage }, { status: 400 });
  }

  let data: unknown;
  try {
    data = await readPayload(request);
  } catch {
    return Response.json({ message: invalidMessage }, { status: 400 });
  }

  if (!isValidEventRequest(data)) {
    return Response.json({ message: invalidMessage }, { status: 400 });
  }

  const user = process.env.SMTP_USER?.trim();
  const password = process.env.SMTP_PASSWORD;
  const recipient = process.env.EVENT_REQUEST_TO?.trim();

  if (!user || !password || !recipient) {
    console.error('Event request: SMTP configuration is missing');
    return Response.json({ message: unavailableMessage }, { status: 503 });
  }

  const transport = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: { user, pass: password },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
    disableFileAccess: true,
    disableUrlAccess: true,
  });

  try {
    const receivedAt = new Intl.DateTimeFormat('ru-RU', {
      dateStyle: 'long',
      timeStyle: 'medium',
      timeZone: 'Europe/Moscow',
    }).format(new Date());
    const result = await transport.sendMail({
      from: { name: 'Aura', address: user },
      to: { address: recipient, name: '' },
      subject: `Aura — заявка: ${getRequestConfig(data.requestType).service}`,
      text: [
        'Новая заявка с сайта Aura',
        '',
        ...getRequestEmailLines(data),
        '',
        `Получено: ${receivedAt} (Москва)`,
      ].join('\n'),
    });

    if (result.accepted.length === 0 || result.rejected.length > 0) {
      throw new Error('Recipient not accepted');
    }

    return Response.json({ ok: true });
  } catch {
    // SMTP errors may contain addresses or message data; never log the original error.
    console.error('Event request: SMTP delivery failed');
    return Response.json({ message: unavailableMessage }, { status: 503 });
  } finally {
    transport.close();
  }
}
