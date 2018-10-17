module.exports = api => {
  api.extendPackage({
    scripts: {
      docker: 'docker build . -t vue-app && docker run -d -p:80 vue-app',
    },
  });
  api.render('./template');
};
