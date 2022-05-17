import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';



const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, {sourcemaps: true})
  .pipe(app.plugin.plumber(
    app.plugin.notify.onError({
      title:"SCSS",
      message: "Error:<%= error.message %>"
    })
  ))
  .pipe(app.plugin.replace(/@img\//g, '../img/'))
  .pipe(sass({
    outputStyle: 'expanded'
  }))
  .pipe(rename({
    extname: ".min.css"
  }))
  .pipe(app.gulp.dest(app.path.build.css))//Результат 
  .pipe(app.plugin.browsersyns.stream());//SERVER
}