# ビルド用
FROM node:16.13.1-alpine3.14 as builder

WORKDIR /app

## パッケージをインストール
COPY package.json ./
COPY package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build

# 実行用
FROM node:16.13.1-alpine3.14

WORKDIR /app

## ビルド用のレイヤからコピーする
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules

## Svelteが動く3000ポートを開けておく
EXPOSE 5173

CMD ["node", "./build"]