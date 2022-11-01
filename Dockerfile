FROM node:16.18-alpine3.16 as builder

WORKDIR /app

# @see https://github.com/pnpm/pnpm/issues/784#issuecomment-1150403741
RUN set -xe
RUN apk add --no-cache curl
RUN curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm
RUN chmod +x /bin/pnpm
RUN apk del curl

# @see https://pnpm.io/ja/cli/fetch
COPY .npmrc package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build



FROM node:16.18-alpine3.16 as runner

WORKDIR /app

COPY --from=builder /app/build build
COPY --from=builder /app/.gcloudignore /app/package.json ./

ENV NODE_ENV "production"

CMD ["npm", "run", "serve"]
