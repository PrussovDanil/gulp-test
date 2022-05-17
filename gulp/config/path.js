//Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path= {
  build:{
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    image: `${buildFolder}/img/`,
    files: `${buildFolder}/files/`,
  },
  src:{
    js: `${srcFolder}/js/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    scss: `${srcFolder}/scss/styles.scss`,
    html: `${srcFolder}/*.html`,//pug
    files: `${srcFolder}/files/**/*.*`,
  },
  watch:{
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,//pug
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,ico,gif,webp}`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcdFolder: srcFolder,
  rootFolder: rootFolder,
  ftp:``
}

