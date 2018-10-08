FROM node:alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "/usr/src/app/"]
RUN npm install
COPY . /usr/src/app
RUN npm run build

FROM nginx:alpine
EXPOSE 80
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /usr/src/app/dist /usr/share/nginx/html
