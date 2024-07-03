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

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json
COPY --from=builder /app/.npmrc ./.npmrc
RUN npm install turbo
RUN npm install

# Build the project
COPY --from=builder /app/out/full/ .

RUN npx turbo run build --filter=apps

# Don't run production as root
COPY --from=builder /app/.npmrc ./.npmrc 
COPY --from=installer /app/apps/core-app-service/next.config.js ./next.config.js 

RUN npm install


EXPOSE 3000

CMD ["npm", "dev"]
