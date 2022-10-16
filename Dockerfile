FROM node:16

WORKDIR /app

ENV PORT 3000
# ENV HOST 0.0.0.0

COPY package.json ./

RUN npm install --omit=dev && npm install --save-dev vite

COPY . .

# Build production app
ENV NODE_ENV "production"

RUN npm run build

CMD ["npm", "run", "serve"]
