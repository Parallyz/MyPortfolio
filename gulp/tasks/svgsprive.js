
import svgSprite from "gulp-svg-sprite";
import { deleteAsync } from "del";
export const svgSprive = () => {
    deleteAsync(app.path.build.svg)
    return app.gulp.src(app.path.src.svgicons, { sourcemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SVG",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../icons/icons.svg',
                    //Preview html svg
                    example: false
                }
            }
        }))
        .pipe(app.gulp.dest(`${app.path.build.images}`));
}