FROM node as base

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

WORKDIR /usr/src/app/src

EXPOSE 8080

FROM base as dev

CMD npm run start

# Bundle app source
COPY ./src/ .

FROM base as qa

#set env
ENV NODE_ENV qa

CMD node index.js

FROM base as prod

#set env
ENV NODE_ENV prod

CMD node index.js
