FROM node:14-alpine

WORKDIR /app

# just copy package.json part such that it can be cached
COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm","start"]
