FROM node:16.14-alpine

WORKDIR /api-todolist

COPY package* .

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run" ]

CMD [ "dev" ]