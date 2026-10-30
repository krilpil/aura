FROM node:22-bookworm-slim AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG SITE_URL=https://auraplace.ru
ARG GOOGLE_SITE_VERIFICATION=''
ARG YANDEX_SITE_VERIFICATION=''
ENV SITE_URL=${SITE_URL} \
    GOOGLE_SITE_VERIFICATION=${GOOGLE_SITE_VERIFICATION} \
    YANDEX_SITE_VERIFICATION=${YANDEX_SITE_VERIFICATION} \
    NEXT_STATIC_EXPORT=0 \
    NEXT_STANDALONE=1
RUN npm run build:server

FROM base AS runner
ENV NODE_ENV=production \
    HOSTNAME=0.0.0.0 \
    PORT=3000

COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static
COPY --from=builder --chown=node:node /app/public ./public
RUN mkdir -p .next/cache && chown -R node:node .next/cache

USER node
EXPOSE 3000
CMD ["node", "server.js"]
