FROM node:14-alpine

WORKDIR /app

COPY ./ ./

EXPOSE 3000

RUN npm i

CMD ["npm","start"]