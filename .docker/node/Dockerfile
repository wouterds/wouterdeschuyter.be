FROM arm32v6/node:12-alpine
WORKDIR /code

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
COPY ./.next ./.next
COPY ./public ./public
COPY ./config.js ./next.config.js
COPY ./dist/healthcheck.js ./healthcheck.js
COPY ./qemu-arm-static /usr/bin/qemu-arm-static

RUN apk add build-base vips-dev --upgrade --no-cache \
    --repository https://alpine.global.ssl.fastly.net/alpine/edge/community/ \
    --repository https://alpine.global.ssl.fastly.net/alpine/edge/main
RUN yarn --production

FROM arm32v6/node:12-alpine
WORKDIR /code

COPY --from=0 /code /code
COPY ./qemu-arm-static /usr/bin/qemu-arm-static

RUN apk add vips --upgrade --no-cache \
    --repository https://alpine.global.ssl.fastly.net/alpine/edge/community/ \
    --repository https://alpine.global.ssl.fastly.net/alpine/edge/main

EXPOSE 3000

HEALTHCHECK CMD node ./healthcheck

CMD ["npm", "start"]
