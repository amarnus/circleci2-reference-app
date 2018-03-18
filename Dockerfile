FROM node:8

RUN mkdir -p /code/bin && \
    mkdir -p /code/node_modules

COPY bin /code/bin
COPY node_modules /code/node_modules

WORKDIR /code

CMD node bin/index.js

EXPOSE 9000
