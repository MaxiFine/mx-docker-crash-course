FROM ubuntu:xenial
RUN apt-get update && apt-get install -y python3 python3-pip git -y curl
RUN apt update && apt install -y nginx
WORKDIR /var/www/html/
ADD index.html /var/www/html/index.html
CMD [ "nginx", "-g", "daemon off;" ]
