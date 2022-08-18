FROM node:16.15.0-alpine3.14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g typescript ts-node nodemon pg sequelize sequelize-cli

RUN npm install --dev

RUN npm install --save-dev @types/node

COPY . .
