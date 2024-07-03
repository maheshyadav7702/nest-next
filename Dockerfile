FROM node:18-alpine AS base
RUN npm install -g npm@10.2.4
FROM base AS builder
WORKDIR /app

RUN npm install -g turbo

COPY package*.json ./
COPY turbo.json ./
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
