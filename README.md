# vue-cli-plugin-docker-nginx

> having a node container running an express server seemed kind of overkill for serving a built vue-app

This is a vue-cli-plugin that adds a minimal docker deployment (**~19MB** + static files) using nginx to serve your vue-app

### Installation

```
vue add vue-cli-plugin-docker-nginx
```

This will automatically add all the files needed to your existing vue-cli project

### Build and run local docker container

```
npm run docker
```

This will build a docker container and run it on port `3000`. If you want to run it on different port change the run script in your `package.json` to

```
  "docker": "docker build . -t vue-app && docker run -d -p <PORT>:80 vue-app"
```

Please make sure to have [docker](https://docs.docker.com/install/) installed and running on your machine.

### Tweak nginx config

With the default settings nginx listens on port `80` and is configured to route all requests back to `index.html`. This way you can safely use `history`-mode in your `vue-router`. These settings can be changed in `default.conf` in you projects root.
