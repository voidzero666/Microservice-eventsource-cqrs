FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install

COPY . .
EXPOSE 8080
CMD ["./wait-for-it.sh", "airport_rabbitmq:5672", "--", "node", "index.js"]


