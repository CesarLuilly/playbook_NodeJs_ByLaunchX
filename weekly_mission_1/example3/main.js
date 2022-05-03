/*
  node main.js
*/
//  //Aqui vamos a hacer uso de Ecmascript Module.


//  //El requiere viene de commonjs y este es un conjunto de bibliotecas
//  //  echas para nodejs con el objetivo de modularizar el codifgo.
const logger1 = require('./logger_1')
const logger2 = require('./logger_2')

logger1('This is an informational message')
logger2.verbose('This is a verbose message')