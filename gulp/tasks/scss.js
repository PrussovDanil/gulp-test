import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css';//Сжатие CSS
import webpcss from 'gulp-webpcss';//Вывод WEBP Изображений 
import autoprefixer from 'gulp-autoprefixer';//Добавление вендорных префиксов 
import groupCssMediaQueries from 'gulp-group-css-media-queries';//Групировка медта запростов 


const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, {sourcemaps: app.isDev})
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
  .pipe(
    app.plugin.if(
      app.isBuild,
      groupCssMediaQueries()
  ))
  .pipe(
    app.plugin.if(
      app.isBuild,
      webpcss(
        {
          webpClass: ".webp",
          noWebpClass: ".no-webp"
        }
      )
  ))
  .pipe(
    app.plugin.if(
      app.isBuild,
      autoprefixer({
        grid:true,
        overredeBrowserlist:["last 3 versions"],
        cascade: true
      })
  ))
  //.pipe(app.gulp.dest(app.path.build.css))//если нужен не сжатый файл
  .pipe(
    app.plugin.if(
      app.isBuild,
      cleanCss()
  ))
  .pipe(rename({
    extname: ".min.css"
  }))
  .pipe(app.gulp.dest(app.path.build.css))//Результат 
  .pipe(app.plugin.browsersyns.stream());//SERVER
}



