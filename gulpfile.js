import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { plugins } from "./gulp/config/plugin.js";
import { server } from "./gulp/tasks/sever.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfTottf, ttfTowoff, fontStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgsprive.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";


global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
};

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
    gulp.watch(path.watch.svg, svgSprive);

    //Watch For Ftp
    //gulp.watch(path.watch.files, copy);
    //gulp.watch(path.watch.html, gulp.series(html, ftp)); 
    //gulp.watch(path.watch.scss, gulp.series(scss, ftp));
    //gulp.watch(path.watch.js,gulp.series(js, ftp) );
    //gulp.watch(path.watch.images,gulp.series(images, ftp) );
}


const fonts = gulp.series(otfTottf, ttfTowoff, fontStyle);
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images, svgSprive));
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZip = gulp.series(reset, mainTasks, zip);
const deployFtp = gulp.series(reset, mainTasks, ftp);


export { dev }
export { build }
export { deployFtp }
export { deployZip }

gulp.task('default', dev);