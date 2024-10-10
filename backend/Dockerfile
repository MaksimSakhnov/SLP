FROM node

WORKDIR /backend
COPY package.json .
RUN yarn install
COPY . .
RUN yarn run pretypeorm
RUN yarn typeorm:migration:generate -- my_init
RUN yarn typeorm:migration:run

CMD yarn run start:prod