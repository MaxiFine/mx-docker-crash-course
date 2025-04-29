FROM golang:1.12.4
WORKDIR /tmp
COPY app.go .
RUN GOOS=linux go build -a -installsuffix cgo -o app . && chmod +x ./app

FROM alpine:3.12.1
WORKDIR /tmp
COPY --from=0 /tmp/app .
CMD [ "./app" ]