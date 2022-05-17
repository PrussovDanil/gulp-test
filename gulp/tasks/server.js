export const server = (done) => {
  app.plugin.browsersyns.init({
    server:{
      baseDir: `${app.path.build.html}`
    },
    notify: false,
    port: 3000,
  });
}