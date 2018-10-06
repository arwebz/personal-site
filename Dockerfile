FROM node:9 as develop

ENV HOST 0.0.0.0

WORKDIR /src/app

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .

EXPOSE 3000
EXPOSE 5858
CMD ["yarn", "dev"]

FROM develop as build
RUN yarn generate

FROM nginx:1.15 as static
COPY --from=build /src/app/dist /usr/share/nginx/html