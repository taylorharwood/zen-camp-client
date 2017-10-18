FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

# This is needed to have access to the webpack CLI in teh container
RUN npm install -g webpack
RUN webpack --config webpack.prod.config.js

EXPOSE 8081
CMD [ "npm", "start" ]