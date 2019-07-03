import * as fs1 from 'fs';
let texto1 = fs1.readFileSync('nombres.txt', 'utf8');
let arregloNombres: string[] = texto1.split(' ');
console.log(arregloNombres);

import * as fs2 from 'fs';
let texto2 = fs2.readFileSync('colegios.txt', 'utf8');
let arregloColegios: string[] = texto2.split(' ');
console.log(arregloColegios);

import * as readlineSync from './node_modules/readline-sync';
let nombreIngresado: string = readlineSync.question('Ingrese el nombre al que desea buscar su colegio correspondiente: ');

let indNombre: number = buscarNombre(nombreIngresado, arregloNombres);
if (indNombre == -1) {
    console.log('No se ha encontrado la persona buscada');
}
else console.log('A ' + nombreIngresado + ' le corresponde el colegio ' + arregloColegios[indNombre]);


function buscarNombre(nombreIng, nombres) : number {
    let indNombre: number = -1;
    for (let i = 0; i < nombres.length; i++) {
        if (nombreIng.toLowerCase() == nombres[i].toLowerCase()) {
            indNombre = i
        }
    }
    return indNombre
}