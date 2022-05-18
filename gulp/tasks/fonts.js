import fs from 'fs';
import fonter from  'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
  //Ищем файлы шрифтов .otf
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
  .pipe(app.plugin.plumber(
    app.plugin.notify.onError({
      title:"FONTS",
      message: "Error:<%= error.message %>"
    })
  ))

  //конвертирование в .ttf
  .pipe(fonter({
    formats:['ttf']
  }))
 .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/*`));//Результат 
 
}


export const ttfToWoff = () => {
  //Ищем файлы шрифтов .ttf
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
  .pipe(app.plugin.plumber(
    app.plugin.notify.onError({
      title:"FONTS",
      message: "Error:<%= error.message %>"
    })
  ))

  //конвертирование в .woff
  .pipe(fonter({
    formats:['woff']
  }))
  //выгружаем в папку с результатом 
  .pipe(app.gulp.dest(`${app.path.build.fonts}`))
  //Ищем файлы шрифтов .ttf
  .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
  //Конфертируем в .woff2
  .pipe(ttf2woff2())
  //Выгружаем в папка с результатом 
 .pipe(app.gulp.dest(`${app.path.build.fonts}`));//Результат 
 
}

// export const fontsStyle = () =>{
  


//   //файл стилей подлючения шрифтов 
//   let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
//   //Проверка на существование 
//   fs.readdir(app.path.build.fonts, function(err, fontsFiles){
//     if(fontsFiles){
//       //проверка на существование фала шрифтов 
//       if(!fs.existsSync(fontsFile)){
//         //если нет создаем его 
//         fs.writeFile(fontsFile,'',cb);
//         let newFileOnly;
//         for(var i = 0; i<fontsFile.length; i++){
//           //записываем подлючение шрифтов
//           let fontFileName = fontsFiles[i].split('.')[0];
//           if(newFileOnly !== fontsFiles){
//             let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0]:fontFileName;
//             let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1]:fontFileName;
//             if(fontWeight.toLowerCase() === 'extralight'){
//               fontWeight = 100;
//             }else if(fontWeight.toLowerCase() === 'extralight'){
//               fontWeight = 200;
//             }else if(fontWeight.toLowerCase() === 'light'){
//               fontWeight = 300;
//             }else if(fontWeight.toLowerCase() === 'medium'){
//               fontWeight = 500;
//             }else if(fontWeight.toLowerCase() === 'semibold'){
//               fontWeight = 600;
//             }else if(fontWeight.toLowerCase() === 'bold'){
//               fontWeight = 700;
//             }else if(fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLocaleLowerCase() === 'heavy'){
//               fontWeight = 800;
//             }else if(fontWeight.toLowerCase() === 'black'){
//               fontWeight = 900;
//             }else {
//               fontWeight = 400;
//             }
//             fs.appendFile(fontsFile,
//               `@fonts-face{
//                 font-family: ${fontName};
//                 font-display: swap;
//                 src: url("../fonts/${fontFileName}.woff2") format("woff2"));
//                 font-weight: ${fontWeight};
//                 font-style: normal;
//               }\r\n`, cb)
//               newFileOnly = fontFileName;

//           }
//         }
//   }else{
//     console.log("juz istnee")
//   }
//     }
//   });
//   return app.gulp.src(`${app.path.srcFolder}`);
//   function cb( ){}
// }
  
 
