import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfTottf = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(fonter({
            fotmats: ['ttf']
        }))
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfTowoff = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(fonter({
            fotmats: ['woff']
        }))
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
        .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))


}

export const fontStyle = () => {
    let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
    fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
        if (fontsFiles) {
            if (!fs.existsSync(fontsFile)) {
                fs.writeFile(fontsFile, '', err => {
                    if (err) console.log(err)
                })
                let newFileOnly;

                for (var i = 0; i < fontsFiles.length; i += 2) {
                    let fontFileName = fontsFiles[i].split('.')[0];


                    if (newFileOnly !== fontFileName) {
                        let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
                        let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;

                        let fontStyle = "normal";


                        if (fontWeight.toLowerCase().includes('italic')) {
                            fontStyle = 'italic'
                        }
                        if (fontWeight.toLowerCase().includes('thin')) {
                            fontWeight = 100;
                        }
                        else if (fontWeight.toLowerCase().includes('extralight')) {
                            fontWeight = 200;
                        }
                        else if (fontWeight.toLowerCase().includes('light')) {
                            fontWeight = 300;
                        }
                        else if (fontWeight.toLowerCase().includes('medium')) {
                            fontWeight = 500;
                        }
                        else if (fontWeight.toLowerCase().includes('semibold')) {
                            fontWeight = 600;
                        }
                        else if (fontWeight.toLowerCase().includes('bold')) {
                            fontWeight = 700;
                        }
                        else if (fontWeight.toLowerCase().includes('extrabold') || fontWeight.toLowerCase().includes('heavy')) {
                            fontWeight = 800;
                        }
                        else if (fontWeight.toLowerCase().includes('black')) {
                            fontWeight = 900;
                        }
                        else { fontWeight = 400; }

                        fs.appendFile(fontsFile, `\n\t@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.ttf") format("ttf"),  url("../fonts/${fontFileName}.woff2") format("woff2");\n\tfont-weight: ${fontWeight};\n\tfont-style: ${fontStyle};\n\t}`, err => {
                            if (err) console.log(err)
                        })
                    }
                    else {
                        console.log("File scss/fonts.css exist. If you want to update him you must delete");
                    }

                }
            }
        }
    });
    return app.gulp.src(`${app.path.srcFolder}`);

}

