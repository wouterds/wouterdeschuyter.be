FROM arm32v6/node:12-alpine
WORKDIR /code

COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./.next ./.next
COPY ./public ./public
COPY ./config.js ./next.config.js
COPY ./qemu-arm-static /usr/bin/qemu-arm-static
RUN apk add vips-dev build-base --update-cache \
    --repository https://alpine.global.ssl.fastly.net/alpine/edge/community/ \
    --repository https://alpine.global.ssl.fastly.net/alpine/edge/main
RUN yarn --production

FROM arm32v6/node:12-alpine
WORKDIR /code

COPY --from=0 /code /code
COPY ./qemu-arm-static /usr/bin/qemu-arm-static
RUN apk add vips --update-cache \
    --repository https://alpine.global.ssl.fastly.net/alpine/edge/community/ \
    --repository https://alpine.global.ssl.fastly.net/alpine/edge/main && \
    rm -rf /var/cache/apk/* && \
    rm /usr/bin/qemu-arm-static

EXPOSE 3000

CMD ["npm", "start"]
