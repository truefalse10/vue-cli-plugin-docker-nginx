# vue-cli-plugin-docker-nginx

> vue-cli-plugin that adds a minimal docker deployment using a nginx server to serve your static files

## Installation

```
vue add vue-cli-plygin-docker-nginx
```

This will automatically add all the files needed to your existing vue-cli project

### Build and run local docker container

```
npm run docker
```

This will build a docker container and run it on a free port. Please make sure to have [docker](https://docs.docker.com/install/) installed and running on your machine.

### Tweak nginx config

With the default settings nginx listens on port `80` and is configured to route all requests back to `index.html`. This way you can safely use `history`-mode in your `vue-router`. These settings can be changed in `default.conf` in you projects root.
