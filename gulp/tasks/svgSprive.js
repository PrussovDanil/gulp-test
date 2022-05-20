import svgSprite from "gulp-svg-sprite"

export const svgSprive = () => {
  return app.gulp.src(app.path.src.svgicons)
  .pipe(app.plugin.plumber(
    app.plugin.notify.onError({
      title:"SVG",
      message: "Error:<%= error.message %>"
    })
  ))
    .pipe(svgSprite({
      mode:{
        stack:{
          sprite: `../icons/icons.svg`,
          example: true
        },
        css: { // Activate the «css» mode
          render: {
            css: true // Activate CSS output (with default options)
          }
        }
      },
    }))
  .pipe(app.gulp.dest(app.path.build.images));//Результат 
 
}