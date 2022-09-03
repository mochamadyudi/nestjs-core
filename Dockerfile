FROM node:latest

# FROM base as production
WORKDIR /usr/src/nestjs/backend

ADD start.sh /
RUN chmod +x /start.sh

RUN apt-get update; apt-get install curl -y; apt-get install zip -y

COPY . /usr/src/nestjs/backend/

RUN npm install

EXPOSE 5100
CMD [ "/start.sh" ]
