FROM node:8 AS build

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
RUN npm install
COPY . /usr/src/app
RUN npm run build

FROM nginx

RUN mkdir -p /usr/src/app
COPY --from=build /usr/src/app/build /usr/src/app/build
COPY default.conf /etc/nginx/conf.d/default.conf