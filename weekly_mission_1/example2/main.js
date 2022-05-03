// node main.js

//  //Me estoy trayendo lo que trae el archivo logger.js, es decir
//  //  todo el archivo de logger lo estoy asiganando a una variable.
const logger = require('./logger')

//  //Y de esta forma vamos a ir accediendo a cada uno de las funciones del otro archivo.
logger.info('This is an informational message')
logger.verbose('This is a verbose message')