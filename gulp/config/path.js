import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";



export const path = {
    build: {
        js: `${buildFolder}/js/`,
        files: `${buildFolder}/files/`,
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        images:`${buildFolder}/img/`,
        fonts:`${buildFolder}/fonts/`,
        svg:`${buildFolder}/img/icons/`,

    },
    src: {
        js: `${srcFolder}/js/app.js`,
        scss: `${srcFolder}/scss/style.scss`,
        images:`${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg:`${srcFolder}/img/**/*.svg`,
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.html`,
        svgicons:`${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        images:`${srcFolder}/img/**/*.{jpg,jpeg,png,svg,ico,gif,webp}`,
        svg:`${srcFolder}/svgicons/**/*.{svg,ico}`,
        js:`${srcFolder}/js/**/*.js`,
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''
}