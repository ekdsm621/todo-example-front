FROM nginx:latest
RUN mkdir /app
WORKDIR /app
RUN mkdir ./dist
ADD ./dist ./dist
RUN rm -f /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/nginx.conf
COPY ./nginx.conf /etc/nginx
CMD ["nginx", "-g", "daemon off;"]