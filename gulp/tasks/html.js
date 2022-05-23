import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import pug from "gulp-pug";

 export const html = () => {
  return app.gulp.src(app.path.src.html)
  .pipe(app.plugin.plumber(
    app.plugin.notify.onError({
      title:"HTML",
      message: "Error:<%= error.message %>"
    })
  ))
  .pipe(pug({
    pretty: true,//Сжатие Html
    verbose: true//Показывать в терминалк какой файл обраьотан 
  }))
  .pipe(app.plugin.replace(/@img\//g, 'img/'))
  .pipe(webpHtmlNosvg())
  .pipe(versionNumber({
    'value': '%DT%',
    'append': {
      'key': '_v',
      'cover' : 0,
      'to':[
        'css',
        'js',
      ]
    },
    'output':{
      'file': 'gulp/version.json'
    }
  }))
  .pipe(app.gulp.dest(app.path.build.html))
  .pipe(app.plugin.browsersyns.stream());
}

