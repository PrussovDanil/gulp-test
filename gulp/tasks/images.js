import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
  return app.gulp.src(app.path.src.images)
  .pipe(app.plugin.plumber(
    app.plugin.notify.onError({
      title:"images",
      message: "Error:<%= error.message %>"
    })
  ))
  .pipe(app.plugin.newer(app.path.build.images))
  .pipe(
    app.plugin.if(
      app.isBuild,
      webp()
  ))
  .pipe(
    app.plugin.if(
      app.isBuild,
      app.gulp.dest(app.path.build.images)
  ))
  .pipe(
    app.plugin.if(
      app.isBuild,
      app.gulp.src(app.path.src.images)
  ))
  .pipe(
    app.plugin.if(
      app.isBuild,
      app.plugin.newer(app.path.build.images)
  ))
  .pipe(
    app.plugin.if(
      app.isBuild,
      imagemin({
        progressive:true,
        svgPlugins: [{removeVievBox:false}],
        interlaced: true,
        optimizationLevel: 3 // 0 to 7
      })
  ))
  .pipe(app.gulp.dest(app.path.build.images))//Результат 
  .pipe(app.gulp.src(app.path.src.svg))
  .pipe(app.gulp.dest(app.path.build.images))
  .pipe(app.plugin.browsersyns.stream());//SERVER
}



