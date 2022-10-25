FROM node:16-alpine3.16 as builder

WORKDIR /app

# ENV PORT 3000
# ENV HOST 0.0.0.0

COPY . .
RUN npm install

# Build production app
ENV NODE_ENV "production"

RUN npm run build



FROM node:16-alpine3.16 as runner

WORKDIR /app

COPY --from=builder build build
COPY --from=builder .gcloudignore .gcloudignore

ENV NODE_ENV "production"

CMD ["npm", "run", "serve"]
