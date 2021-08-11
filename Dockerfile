FROM node:alpine

WORKDIR /app

COPY package*.json /app

RUN npm install

CMD ["npm", "start"]