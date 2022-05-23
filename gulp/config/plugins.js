import replace from "gulp-replace";//Поиск и замена 
import plumber from "gulp-plumber";//Обработка ошибок
import notify from "gulp-notify";//Сообщение
import browsersyns from "browser-sync"//Сервер

//Экспорт объекта
export const plugin = {
  replace:replace,
  plumber:plumber,
  notify:notify,
  browsersyns:browsersyns

}