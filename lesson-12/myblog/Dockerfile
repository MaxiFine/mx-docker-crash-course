FROM node:17-alpine

# watching the container for changes
RUN npm install -g nodemon

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

# espose by compose file...

CMD ["npm", "start"]
# CMD [ "node", "app.js" ]
