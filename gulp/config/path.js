//Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path= {
  build:{
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`,
  },
  src:{
    html: `${srcFolder}/*.pug`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch:{
    html: `${srcFolder}/**/*.pug`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcdFolder: srcFolder,
  rootFolder: rootFolder,
  ftp:``
}

