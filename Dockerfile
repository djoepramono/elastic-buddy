FROM node:15.3.0-buster-slim

RUN apt update && apt install -y curl
