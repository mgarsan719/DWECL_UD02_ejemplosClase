let f1 = [1, 2, 3];
let f2 = [4, 5, 6];
let f3 = [7, 8, 9];

let m = [f1, f2, f3];

console.table(m);

let m2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.table(m2);

//Para acceder a los datos de las matrices es: nombreMatriz[fila][columna]
console.log("Pintamos el 5: " + m2[1][1]);
console.log("Pintamos el 9: " + m2[2][2]);
console.log("Pintamos el 6: " + m2[1][2]);

//Pintar el doble de la matriz;
for (let i = 0; i < m2.length; i++) {
    for (let j = 0; j < m2[i].length; j++) {
        m2[i][j] *= 2;
    }
}

console.table(m2);

//CALCULAR MEDIA
let media=0;
let cont;

for(let fila of m2){
    for(let num of fila){
        media +=num;
        cont++;
    }
}

console.log(`El valor medio de la matriz es: ${media/cont}`);

//SUMA 5 A CADA VALOR DE LA MATRIZ
for(let i=0; i<m2.length; i++){
    for(let j=0; j<m2[i].length; j++){
        m2[i][j]+=5;
    }
}

console.table(m2);