'use client';

import { useId, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { Modal } from 'antd';

import { contacts } from '@/shared/config/contacts';
import {
  getInitialRequestValues,
  getRequestConfig,
  getRequestErrors,
  isRequestFieldVisible,
  type EventRequestType,
  type EventRequestValues,
} from '@/shared/config/eventRequest';

import {
  SBooking,
  SBookingInner,
  SBookingTitle,
  SBookingNote,
  SBookingLink,
  SForm,
  SFields,
  SField,
  SFullField,
  SFormActions,
  SFormButton,
  SRequestTrigger,
  SFormNote,
  SHoneypot,
  SError,
  SModalBody,
  SModalTitle,
} from './eventRequest.styles';

type RequestProps = { requestType: EventRequestType; initialValues?: EventRequestValues };
type Status = 'idle' | 'sending' | 'success' | 'error';
const unavailableMessage = 'Не удалось отправить заявку. Попробуйте ещё раз или позвоните в Aura.';

function RequestPhone() {
  return (
    <SBookingLink href={contacts.booking.href}>
      {contacts.booking.phone} · Позвонить в Aura
    </SBookingLink>
  );
}

function EventRequestForm({ requestType, initialValues }: RequestProps) {
  const id = useId();
  const config = getRequestConfig(requestType);
  const [values, setValues] = useState(() => getInitialRequestValues(requestType, initialValues));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const submitting = useRef(false);
  const website = useRef<HTMLInputElement>(null);
  const sending = status === 'sending';

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const cleaned = Object.fromEntries(
      config.fields.map((field) => [
        field.name,
        isRequestFieldVisible(field, values) ? values[field.name].trim() : '',
      ])
    );
    const nextErrors = getRequestErrors(requestType, cleaned);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus('error');
      setMessage('Проверьте отмеченные поля.');
      const firstInvalid = config.fields.find((field) => nextErrors[field.name]);
      if (firstInvalid) (form.elements.namedItem(firstInvalid.name) as HTMLElement | null)?.focus();
      return;
    }
    submitting.current = true;
    setStatus('sending');
    setMessage('Отправляем заявку…');
    try {
      const response = await fetch('/api/event-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          requestType,
          values: cleaned,
          website: website.current?.value ?? '',
        }),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error('Request failed');
      setValues(getInitialRequestValues(requestType));
      if (website.current) website.current.value = '';
      setStatus('success');
      setMessage(
        'Заявка отправлена. Мы свяжемся с вами по указанному телефону. Бронирование подтвердит менеджер.'
      );
    } catch {
      setStatus('error');
      setMessage(unavailableMessage);
    } finally {
      submitting.current = false;
    }
  }

  return (
    <SForm
      noValidate
      onSubmit={handleSubmit}
      aria-label={`Заявка: ${config.service}`}
      aria-busy={sending}
    >
      <SHoneypot aria-hidden="true">
        <label htmlFor={`${id}-website`}>Оставьте это поле пустым</label>
        <input ref={website} id={`${id}-website`} name="website" tabIndex={-1} autoComplete="off" />
      </SHoneypot>
      <SFields>
        {config.fields
          .filter((field) => isRequestFieldVisible(field, values))
          .map((field) => {
            const Field = field.type === 'textarea' ? SFullField : SField;
            const fieldId = `${id}-${field.name}`;
            const common = {
              id: fieldId,
              name: field.name,
              value: values[field.name],
              disabled: sending,
              required: field.required,
              'aria-invalid': Boolean(errors[field.name]),
              'aria-describedby': errors[field.name] ? `${fieldId}-error` : undefined,
              onChange: (event: { target: { value: string } }) => {
                setValues((current) => {
                  const next = { ...current, [field.name]: event.target.value };
                  for (const dependent of config.fields) {
                    if (
                      dependent.when?.field === field.name &&
                      !isRequestFieldVisible(dependent, next)
                    ) {
                      next[dependent.name] = '';
                    }
                  }
                  return next;
                });
                setErrors((current) => ({ ...current, [field.name]: '' }));
                if (status !== 'idle') {
                  setStatus('idle');
                  setMessage('');
                }
              },
            };
            return (
              <Field key={field.name}>
                <label htmlFor={fieldId}>
                  {field.label}
                  {field.required ? ' *' : ''}
                </label>
                {field.type === 'select' ? (
                  <select {...common}>
                    <option value="">{field.required ? 'Выберите вариант' : 'Не указано'}</option>
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : field.type === 'textarea' ? (
                  <textarea {...common} maxLength={1500} rows={3} />
                ) : (
                  <input
                    {...common}
                    type={field.type}
                    min={field.type === 'number' ? 1 : undefined}
                    max={field.max}
                    step={field.type === 'number' ? 1 : undefined}
                    maxLength={field.type === 'tel' ? 64 : undefined}
                    autoComplete={field.type === 'tel' ? 'tel' : undefined}
                    placeholder={field.type === 'tel' ? '+7 (999) 123-45-67' : undefined}
                  />
                )}
                {errors[field.name] && (
                  <SError id={`${fieldId}-error`}>{errors[field.name]}</SError>
                )}
              </Field>
            );
          })}
      </SFields>
      <SFormActions>
        <SFormButton type="submit" disabled={sending}>
          {sending ? 'Отправляем…' : 'Отправить заявку'}
        </SFormButton>
        <SFormNote $status={status} aria-live="polite" aria-atomic="true">
          {message || 'Поля со * обязательны. Если дата пока неизвестна, оставьте её пустой.'}
          {status === 'error' && (
            <>
              {' '}
              <a href={contacts.booking.href}>Позвонить: {contacts.booking.phone}</a>
            </>
          )}
        </SFormNote>
      </SFormActions>
    </SForm>
  );
}

export function EventRequestSection({
  requestType,
  initialValues,
  id,
  title,
  description,
}: RequestProps & {
  id?: string;
  title?: string;
  description?: string;
}) {
  const headingId = useId();
  const config = getRequestConfig(requestType);
  return (
    <SBooking id={id} aria-labelledby={headingId}>
      <SBookingInner>
        <div>
          <SBookingTitle id={headingId}>{title ?? config.title}</SBookingTitle>
          <SBookingNote>{description ?? config.description}</SBookingNote>
          <RequestPhone />
        </div>
        <EventRequestForm
          key={requestType}
          requestType={requestType}
          initialValues={initialValues}
        />
      </SBookingInner>
    </SBooking>
  );
}

export function EventRequestModalTrigger({
  requestType,
  initialValues,
  children,
  className,
  variant = 'secondary',
}: RequestProps & {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'text';
}) {
  const [open, setOpen] = useState(false);
  const config = getRequestConfig(requestType);
  return (
    <>
      <SRequestTrigger
        type="button"
        $variant={variant}
        className={className}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        {children}
      </SRequestTrigger>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        title={<SModalTitle>{config.title}</SModalTitle>}
        footer={null}
        width={760}
        closable={{ 'aria-label': 'Закрыть форму' }}
        mask={{ closable: false }}
        focusable={{ trap: true, focusTriggerAfterClose: true }}
      >
        <SModalBody>
          <SBookingNote>{config.description}</SBookingNote>
          <RequestPhone />
          <EventRequestForm
            key={requestType}
            requestType={requestType}
            initialValues={initialValues}
          />
        </SModalBody>
      </Modal>
    </>
  );
}
