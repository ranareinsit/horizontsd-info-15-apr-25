# syntax=docker.io/docker/dockerfile:1
FROM node:23-alpine3.20 AS base

FROM base AS deps
ENV NEXT_TELEMETRY_DISABLED=1 NODE_ENV=production YARN_VERSION=4.7.0 PORT=3000
RUN apk update 
RUN apk upgrade
RUN apk add --no-cache libc6-compat
RUN npm install -g corepack
RUN npm -v
RUN corepack enable
RUN corepack install --global yarn@${YARN_VERSION}
WORKDIR /app

COPY .yarnrc.yml package.json yarn.lock package-lock.json ./

RUN yarn --immutable

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1 NODE_ENV=production YARN_VERSION=4.7.0 PORT=3000
RUN apk update 
RUN apk upgrade
RUN apk add --no-cache libc6-compat
RUN npm i -g corepack@latest
RUN npm -v
RUN corepack enable
RUN corepack install --global yarn@${YARN_VERSION}
RUN corepack prepare pnpm --activate

RUN yarn run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
