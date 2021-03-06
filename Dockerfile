FROM node

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./package.json ./
RUN npm install --registry=https://registry.npm.taobao.org
CMD npm run start