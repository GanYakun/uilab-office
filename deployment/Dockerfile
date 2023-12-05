# Mac M2 :
# docker buildx build -f deployment/Dockerfile -t registry.cn-hangzhou.aliyuncs.com/banff/officeauto_uilab:12051707 --platform=linux/amd64 .

# docker run -i --rm -p 88:80 registry.cn-hangzhou.aliyuncs.com/banff/officeauto_uilab:12051707
FROM registry.cn-hangzhou.aliyuncs.com/banff/nginx:latest

WORKDIR /usr/share/nginx/html/

COPY deployment/nginx.conf /opt/runtime/nginx/etc/nginx/nginx.conf

COPY ./dist/* /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]