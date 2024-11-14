FROM node

WORKDIR /backend
COPY package.json .
RUN yarn install
COPY . .
RUN yarn run pretypeorm
RUN git clone https://github.com/vishnubob/wait-for-it.git

RUN yarn build
CMD yarn run start:prod