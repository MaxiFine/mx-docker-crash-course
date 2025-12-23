FROM node:17-alpine
RUN npm install -g nodemon
WORKDIR /app
COPY package.json ./
RUN npm install
EXPOSE 4500
COPY . .
CMD [ "npm","run", "dev" ]
