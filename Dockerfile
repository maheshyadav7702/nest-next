FROM node:18-alpine AS base
RUN npm install -g npm@10.2.4
FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update

# Set working directory
WORKDIR /app
RUN npm install -g turbo@1.12.3
COPY package*.json ./
COPY turbo.json ./
COPY ./apps ./apps

RUN npx turbo prune --scope="apps" --docker

RUN npm install


EXPOSE 3000

CMD ["npm", "dev"]
