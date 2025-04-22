FROM node:17-alpine

# TO CONNECT VOLUME TO CONTAINER
RUN npm install -g nodemon

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

# to use compose to expose the port, uncomment the line below
EXPOSE 4000
# # required for docker desktop port mapping

CMD ["npm", "run", "dev"]