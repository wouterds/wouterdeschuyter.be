FROM node:14-alpine
WORKDIR /code

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
COPY ./.next ./.next
COPY ./public ./public
COPY ./dist/healthcheck.js ./healthcheck.js
RUN yarn --production

FROM node:14-alpine
WORKDIR /code

COPY --from=0 /code /code

EXPOSE 3000

HEALTHCHECK CMD ["node", "./healthcheck.js"]

CMD ["yarn", "start"]
