# Use a minimal Alpine Linux as the base image
FROM alpine:latest

# Maintainer information
LABEL author="test.main@gmail.com"

# Install Node.js and npm
RUN apk update && apk add nodejs npm

# Set up the working directory
WORKDIR /usr/app

# Copy the application files into /usr/app
COPY . /usr/app

# Install application dependencies
RUN npm install

# Expose the port for the Node.js application
EXPOSE 3000

# Run the application
CMD ["node", "app.js"]


#######################################
## REBUILDING THE DOCKER IMAGE INTO A MULTI-STAGE BUILD
#######################################
FROM node:latest
# Maintainer information
LABEL author="test.main@gmail.com"
# Install Node.js and npm
RUN apk update && apk add nodejs npm