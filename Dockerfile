FROM node:9

ENV HOST 0.0.0.0

WORKDIR /src/app

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .

EXPOSE 3000
EXPOSE 5858
CMD ["yarn", "dev"]
