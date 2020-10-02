FROM node:14 as base

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY tsconfig.json ./
COPY /src ./src

# Install app dependencies
RUN npm install

# Compile TypeScript to Javascript
RUN npm run build

EXPOSE 8080

FROM base as qa

#set env
ENV NODE_ENV qa

CMD node build/index.js

FROM base as prod

#set env
ENV NODE_ENV prod

CMD node build/index.js
