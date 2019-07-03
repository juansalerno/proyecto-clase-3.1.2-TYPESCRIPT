"use strict";
exports.__esModule = true;
var fs1 = require("fs");
var texto1 = fs1.readFileSync('nombres.txt', 'utf8');
var arregloNombres = texto1.split(' ');
console.log(arregloNombres);
var fs2 = require("fs");
var texto2 = fs2.readFileSync('colegios.txt', 'utf8');
var arregloColegios = texto2.split(' ');
console.log(arregloColegios);
var readlineSync = require("./node_modules/readline-sync");
var nombreIngresado = readlineSync.question('Ingrese el nombre al que desea buscar su colegio correspondiente: ');
var indNombre = buscarNombre(nombreIngresado, arregloNombres);
if (indNombre == -1) {
    console.log('No se ha encontrado la persona buscada');
}
else
    console.log('A ' + nombreIngresado + ' le corresponde el colegio ' + arregloColegios[indNombre]);
function buscarNombre(nombreIng, nombres) {
    var indNombre = -1;
    for (var i = 0; i < nombres.length; i++) {
        if (nombreIng.toLowerCase() == nombres[i].toLowerCase()) {
            indNombre = i;
        }
    }
    return indNombre;
}
