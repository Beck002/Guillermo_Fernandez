const { src, dest, watch, parallel } = require('gulp');

// CSS
const sass         = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const cssnano      = require('cssnano');
const postcss      = require('gulp-postcss');
const sourcemaps   = require('gulp-sourcemaps');

// Imagenes
const cache    = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp     = require('gulp-webp');


const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    imagenes: 'src/img/**/*'
}

function css() {
    return src(paths.scss) // Identificar el archivo .SCSS a compilar
        // .pipe( sourcemaps.init() )
        .pipe( sass() ) // Compilarlo
        // .pipe( postcss([ autoprefixer(), cssnano() ]) )
        // .pipe(sourcemaps.write('.'))
        .pipe( dest('./build/css') ) // Almacenarla en el disco duro
}

function imagenes() {
    src('src/imagenes/hombre/*')
        .pipe(cache(imagemin({ optimizationLevel: 3})))
        .pipe(dest('./build/img/hombre'));
    src('src/imagenes/mujer/*')
        .pipe(cache(imagemin({ optimizationLevel: 3})))
        .pipe(dest('./build/img/mujer'));
    src('src/imagenes/b-grounds/*')
        .pipe(cache(imagemin({ optimizationLevel: 3})))
        .pipe(dest('./build/img/b-grounds'));
    src('src/imagenes/iconos-logos/*')
        .pipe(cache(imagemin({ optimizationLevel: 3})))
        .pipe(dest('./build/img/iconos-logos'));      
    
}



function versionWebp() {
    const opciones = {
        quality: 50
    };
    src('src/imagenes/hombre/*')
        .pipe( webp(opciones) )
        .pipe( dest('./build/img/hombre') );
    src('src/imagenes/mujer/*')
        .pipe( webp(opciones) )
        .pipe( dest('./build/img/mujer') );
    src('src/imagenes/iconos-logos/*')
        .pipe( webp(opciones) )
        .pipe( dest('./build/img/iconos-logos') );
    src('src/imagenes/b-grounds/*')
        .pipe( webp(opciones) )
        .pipe( dest('./build/img/b-grounds') );
}

function watchArchivos() {  
    watch( paths.scss, css );
    watch( paths.imagenes, imagenes );
    watch( paths.imagenes, versionWebp );
}

exports.watchArchivos = watchArchivos ; 
exports.default       = parallel( css, imagenes, versionWebp, watchArchivos) ;

