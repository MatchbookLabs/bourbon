FROM node:8.11.1

ENV LIB_HOME /home/bourbon
WORKDIR $LIB_HOME
COPY . $LIB_HOME
RUN npm install

