FROM nginx:1.17-alpine
WORKDIR /code

COPY ./.docker/nginx/default.conf /etc/nginx/conf.d/default.conf

RUN apk add curl --no-cache

HEALTHCHECK CMD ["curl --fail http://localhost/ping || exit 1"]
