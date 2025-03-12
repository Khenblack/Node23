FROM node:23-alpine as build

ENV NODE_ENV=production

WORKDIR /app
COPY . .
RUN npm ci --include=dev
RUN npm run build

FROM node:23-alpine

COPY package.json ./
COPY package-lock.json ./
RUN npm ci --only=production

COPY --from=build /app/dist ./dist

CMD ["npm", "start"]
EXPOSE 3000