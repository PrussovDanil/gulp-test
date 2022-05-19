import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import pug from "gulp-pug";
import fileinclude from "gulp-file-include";


 export const html = () => {
  return app.gulp.src(app.path.src.html)
  .pipe(app.plugin.plumber(
    app.plugin.notify.onError({
      title:"HTML",
      message: "Error:<%= error.message %>"
    })
  ))
  .pipe(fileinclude())
  // .pipe(pug({
  //   pretty: true,//Сжатие Html
  //   verbose: true//Показывать в терминалк какой файл обраьотан 
  // }))
  .pipe(app.plugin.replace(/@img\//g, 'img/'))
  .pipe(
    app.plugin.if(
      app.isBuild,
      webpHtmlNosvg()
      )
    )
  .pipe(
    app.plugin.if(
    
      app.isBuild,
    
      versionNumber({
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
    })
    )) 
  .pipe(app.gulp.dest(app.path.build.html))
  .pipe(app.plugin.browsersyns.stream());
}

