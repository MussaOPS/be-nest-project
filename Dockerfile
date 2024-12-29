FROM node:16

WORKDIR /src

COPY package.json /src/package.json

RUN npm install

CMD ["npm", "start"]
