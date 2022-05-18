import replace from "gulp-replace";//Поиск и замена 
import plumber from "gulp-plumber";//Обработка ошибок
import notify from "gulp-notify";//Сообщение
import browsersyns from "browser-sync"//Сервер
import newer from "gulp-newer"//Проверка на обновление картинки 
import ifPligin from "gulp-if";//Условное деление 

//Экспорт объекта
export const plugin = {
  replace:replace,
  plumber:plumber,
  notify:notify,
  browsersyns:browsersyns,
  newer:newer,
  if:ifPligin

}