import { configFTP } from '../config/ftp.js';
import vinylFTp from 'vinyl-ftp';
import util from 'gulp-util';

export const ftp = () => {
 configFTP.log = util.log;
 const ftpConnect = vinylFTp.create(configFTP);
  return app.gulp.src(`${app.path.buildFolder}/**/*.*`,{})
  .pipe(app.plugin.plumber(
    app.plugin.notify.onError({
      title:"FTP",
      message: "Error:<%= error.message %>"
    })
  ))
  
  .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`));
  
}