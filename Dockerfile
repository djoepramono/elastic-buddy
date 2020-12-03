FROM node:15.3.0-buster-slim

RUN apt update && apt install -y curl

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
WORKDIR /app

RUN npm install

COPY . /app
