FROM node:10-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN npm install global @nestjs/cli --registry=https://registry.npm.taobao.org
CMD npm run start