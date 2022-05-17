import webpack from "webpack-stream";

export const js = () => {
  return app.gulp.src(app.path.src.js, {sourcemaps: true})
  .pipe(app.plugin.plumber(
    app.plugin.notify.onError({
      title:"JS",
      message: "Error:<%= error.message %>"
    })
  ))

  .pipe(webpack({
    mode: 'development',
    output: {
      filename: 'app.min.js',
    }
  }))
  
  .pipe(app.gulp.dest(app.path.build.js))//Результат 
  .pipe(app.plugin.browsersyns.stream());//SERVER
}