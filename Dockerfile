FROM node:14.6-alpine as build
WORKDIR /src
COPY . .
RUN npm install
RUN npm run build