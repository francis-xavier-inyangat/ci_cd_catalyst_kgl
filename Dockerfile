FROM node:16.16.0
FROM node:16.16.0

WORKDIR /app

COPY package*.json ./


RUN npm install

COPY . .
                                                                                                                                                                     
ENV PORT=2050

EXPOSE 2050

CMD [ "npm", "start" ]