import * as fs3 from 'fs';
import * as readlineSync from './node_modules/readline-sync';

let texto = fs3.readFileSync('matrices.txt', 'utf8');
let arregloTexto: string[] = texto.split(' ');

let arregloNumerico: number[] = new Array(arregloTexto.length)

for (let i = 0; i < arregloTexto.length; i++) {
    arregloNumerico[i] = parseInt(arregloTexto[i]);
}
console.log(arregloNumerico);
console.log('Transformarlo en matriz:');

let cantFilas: number = readlineSync.questionInt('Ingrese la cantidad de filas: ');
let cantColumnas: number = readlineSync.questionInt('Ingrese la cantidad de columnas: ');

if ((cantFilas * cantColumnas) == (arregloNumerico.length)) {
    armarYMostrarMatriz(arregloNumerico, cantFilas, cantColumnas);
}
else {
    console.log('Revise la cantidad de filas y columnas de la matriz que desea realizar para que sea posible ubicar los '+ (arregloNumerico.length)+ ' elementos del arreglo.');
}

function armarYMostrarMatriz(arreglo, filas, columnas): void {
    let matriz = new Array(filas);

    for (let i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(columnas);
    }
    let h = 0
    for (let index = 0; index < matriz.length; index++) {
        for (let subIndex = 0; subIndex < matriz[0].length; subIndex++) {
            matriz[index][subIndex] = arreglo[(h)];
            h++
        }
    }
    console.log(matriz);
}