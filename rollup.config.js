import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import css from 'rollup-plugin-css-only';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import livereload from 'rollup-plugin-livereload'; // Importa el complemento

const production = !process.env.ROLLUP_WATCH;

const Demo = {
  input: 'src/main.js', // Ruta al archivo de entrada de tu aplicación Backbone
  output: {
    file: production ? 'public/dist/bundle.min.js' : 'public/dist/bundle.js' , // Ruta al archivo de salida
    format: 'iife', // Formato de salida ('iife', 'umd', 'es', 'cjs', etc.)
  },
  plugins: [
    resolve(), // Resuelve módulos de Node.js
    commonjs(), // Convierte módulos CommonJS en ES6
    production ?  terser() : '',
    babel({
      exclude: 'node_modules/**', // Excluye la compilación de módulos de node_modules
    }),
    production ?  '' : livereload('dist'), // Configura el complemento
    css({
      output: production ?  'bundle.min.css' : 'bundle.css'
    })
  ],
};

export default [Demo, ];