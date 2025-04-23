FROM ubuntu:xenial
RUN apt-get update && apt-get install -y python3 python3-pip git -y curl
RUN apt update && apt install -y nginx
WORKDIR /var/www/html/
ADD index.html /var/www/html/index.html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
STOPSIGNAL SIGTERM
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD curl -f http://localhost/ || exit 1