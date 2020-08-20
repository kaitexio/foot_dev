FROM node:13.8.0-stretch
RUN mkdir /frontend
WORKDIR /frontend
COPY package.json .
COPY yarn.lock .
RUN yarn install 
COPY . .
