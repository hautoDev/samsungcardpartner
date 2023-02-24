
import gulp from "gulp";
import gpug from "gulp-pug";
import del from "del";
import ws from "gulp-webserver";
import image from "gulp-image";
import sourcemaps from "gulp-sourcemaps"
import gIf from "gulp-if";
import miniCSS from "gulp-csso";
import removSourcemaps from "gulp-remove-sourcemaps";


//js용(gulp-bro) babelify(바벨 쓰기 위해 필요)
import bro from "gulp-bro";
import babelify from "babelify";


//import sass
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

const bSync = require("browser-sync").create();

//css 하위버전 자동지원
//https://www.npmjs.com/package/gulp-autoprefixer
//https://github.com/postcss/autoprefixer#options
//package.json 에 "browserslist":["last 2 versions"] 추가
import autoprefixer from "gulp-autoprefixer";


import browserSync from "browser-sync";

//배포
//import ghPages from "gulp-gh-pages";


//glob경로 사용
//https://github.com/gulpjs/glob-parent
//https://github.com/isaacs/node-glob


const routes = {
    pug: {
        watch: "src/**/*.pug",
        src: ["src/pages/**/!(_)*.pug", "!src/@(include|template)/*.pug",],
        dest: "build/"
    },
    img: {
        watch: "src/img/**/*",
        src: "src/img/**/*",
        dest: "build/img/"
    },
    scss: {
        watch: "src/assets/scss/**/*.scss",
        src: "src/assets/scss/**/*.scss",
        dest: "build/static/css/"
    },
    js: {
        watch: "src/assets/**/*.js",
        // src: ["src/assets/js/**/!(_)*.js","!src/assets/js/lib/*.js"],
        src: ["src/assets/js/**/!(_)*.js"],
        lib: "src/assets/js/?(lib)/**/*.js",
        dest: "build/static/js/"
    },
    root:{
      build:"build",
      gitDocs:"docs"
    }
}


const pug = () =>
    gulp.src(routes.pug.src)
        .pipe(gpug({pretty:true}))
        .pipe(gulp.dest(routes.pug.dest));

const img = () =>
    gulp.src(routes.img.src)
        //.pipe(image())
        .pipe(gulp.dest(routes.img.dest));

const scss = () =>
    gulp.src(routes.scss.src)
    .pipe(sourcemaps.init())
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    //.pipe(miniCSS({ sourcemaps: true }))
    .pipe(gulp.dest(routes.scss.dest))
        

const js = () =>
    gulp.src(routes.js.src)
        // .pipe(bro({transform: [
        //     babelify.configure({presets:['@babel/preset-env']}),
        //     ['uglifyify',{global:true}]
        // ]}))
        .pipe(gulp.dest(routes.js.dest))
        // .pipe(gulp.src(routes.js.lib))
        // .pipe(gulp.dest(routes.js.dest))

const jslib = () =>
  gulp.src(routes.js.lib)
      //.pipe(gulp.src(routes.js.lib))
      .pipe(gulp.dest(routes.js.dest))

//일단 안씀.
const webserver = ()=>
    gulp.src("build/")
        .pipe(ws({port:3030, livereload:true, open: true}));


const bSyncInfo = () =>{
    return bSync.init({
        watch:true,
        port: 3040,
        startPath: "/",
        //notify: false,
        server: {
            baseDir: "./build/"
        }
    });
}

const watch = () =>{
    gulp.watch(routes.pug.watch, pug);
    gulp.watch(routes.img.watch, img);
    gulp.watch(routes.scss.watch, scss);
    gulp.watch(routes.js.watch, js);
}

const ghDeploy = () => gulp.src("build/**/*").pipe(ghPages());

export const clean = () => del([routes.root.build]);


//
const prepare = gulp.series([clean, img]);
const assets = gulp.series([pug, scss, js, jslib]);
// const assets = gulp.series([pug, scss, js]);
const live = gulp.parallel([bSyncInfo, watch]);


//
export const build = gulp.series([prepare, assets]);
export const dev = gulp.series([build, live]);
export const release = gulp.series([build]);
//export const deploy = gulp.series([build, ghDeploy]);
