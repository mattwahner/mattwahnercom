ARG env=dev

FROM nginx AS base

FROM base AS base-dev
COPY default-dev.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html

FROM base AS base-prod
COPY default-prod.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html

FROM base-${env}