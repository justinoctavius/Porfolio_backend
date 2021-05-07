FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

ENV NODE_ENV='pro'

CMD [ "npm", "start" ]