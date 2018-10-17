# stage-1: build dist folder
FROM node:alpine as build
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "/usr/src/app/"]
RUN npm install --silent
COPY . .
RUN npm run build

# stage-2: copy static files to nginx image
FROM nginx:alpine
EXPOSE 80
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
