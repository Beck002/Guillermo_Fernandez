# Guillermo_Fernandez
Repositorio Coder

El código css está mínificado en el build, listo para producción
en caso de querer revertirlo:

1- Usar "npm i" en la terminal para instalar las dependencias de desarrollo y poder ejecutar
   las tareas de la "gulpfile.js"

2- Eliminar o comentar las lineas de código indicadas del archivo "gulpfile.js" 

          function css() {
              return src(paths.scss) // Identificar el archivo .SCSS a compilar
                  .pipe( sourcemaps.init() ) ========> Eliminar/Comentar
                  .pipe( sass() ) // Compilarlo
                  .pipe( postcss([ autoprefixer(), cssnano() ]) )  ========> Eliminar/Comentar
                  .pipe(sourcemaps.write('.'))   ========> Eliminar/Comentar
                  .pipe( dest('./build/css') ) // Almacenarla en el disco duro
          }


3- En la terminal ingresar "gulp css" y esperar a que el proceso termine.
