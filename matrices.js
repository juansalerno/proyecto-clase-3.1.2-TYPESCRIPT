"use strict";
exports.__esModule = true;
var fs3 = require("fs");
var readlineSync = require("./node_modules/readline-sync");
var texto = fs3.readFileSync('matrices.txt', 'utf8');
var arregloTexto = texto.split(' ');
var arregloNumerico = new Array(arregloTexto.length);
for (var i = 0; i < arregloTexto.length; i++) {
    arregloNumerico[i] = parseInt(arregloTexto[i]);
}
console.log(arregloNumerico);
console.log('Transformarlo en matriz:');
var cantFilas = readlineSync.questionInt('Ingrese la cantidad de filas: ');
var cantColumnas = readlineSync.questionInt('Ingrese la cantidad de columnas: ');
if ((cantFilas * cantColumnas) == (arregloNumerico.length)) {
    armarYMostrarMatriz(arregloNumerico, cantFilas, cantColumnas);
}
else {
    console.log('Revise la cantidad de filas y columnas de la matriz que desea realizar para que sea posible ubicar los ' + (arregloNumerico.length) + ' elementos del arreglo.');
}
function armarYMostrarMatriz(arreglo, filas, columnas) {
    var matriz = new Array(filas);
    for (var i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(columnas);
    }
    var h = 0;
    for (var index = 0; index < matriz.length; index++) {
        for (var subIndex = 0; subIndex < matriz[0].length; subIndex++) {
            matriz[index][subIndex] = arreglo[(h)];
            h++;
        }
    }
    console.log(matriz);
}
