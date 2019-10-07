FROM arm32v6/node:12-alpine
WORKDIR /code

COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./dist /code/.next
COPY ./qemu-arm-static /usr/bin/qemu-arm-static
RUN apk add vips-dev fftw-dev build-base python --update-cache \
    --repository https://alpine.global.ssl.fastly.net/alpine/edge/community/ \
    --repository https://alpine.global.ssl.fastly.net/alpine/edge/main
RUN yarn --production

FROM arm32v6/node:12-alpine
WORKDIR /code

COPY ./qemu-arm-static /usr/bin/qemu-arm-static
COPY --from=0 /code /code
RUN apk add vips --update-cache \
    --repository https://alpine.global.ssl.fastly.net/alpine/edge/community/ \
    --repository https://alpine.global.ssl.fastly.net/alpine/edge/main && \
    rm -rf /var/cache/apk/*

EXPOSE 3000

CMD ["npm", "start"]
