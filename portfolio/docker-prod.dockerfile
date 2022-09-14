FROM node:12-alpine
WORKDIR /portfolio
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]
EXPOSE 3000