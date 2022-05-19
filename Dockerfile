FROM nginx

COPY _nginx/default.conf /etc/nginx/conf.d/

RUN rm -rf /usr/share/nginx/html/*
RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
COPY /dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]