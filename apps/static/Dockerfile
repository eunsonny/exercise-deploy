#base image
FROM node:20

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN pnpm install
COPY . /usr/src/app/
RUN pnpm build

# EXPOSE 3100
# CMD [ "yarn", "start" ]j