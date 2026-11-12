// 1. Crea una lista de alumnos. (lista == array)
let alumnos = [
    "Juan Perez",
    "Antonio Rodriguez",
    "Ana Santos",
    "Sara Gómez",
    "Pedro Nuñez"
];

// En una lista importa el orden. ¿Donde meter/sacar un elemento?
// Al final
// A1 ppioF
// En medio

// 1.a. Introduce "Sofia López" al final
alumnos.push("Sofía López");

// 1.b. Introduce "Hugo González" al principio
alumnos.unshift("Hugo González");

// 1.c. Introduce "Victor Roldán" en medio
alumnos.splice(3, 0, "Victor Roldan")

// 1.d. Eliminar el primero de la lista
alumnos.shift();

// 1.e. Eliminar el ultimo de la lista
alumnos.pop();

// 1.f. Eliminar de una posicion intermedia de la lista
alumnos.splice(3, 1);

console.table(alumnos);

// 2. Crea un conjunto de alumnos
// Caracteristicas de SET (conjuntos) frente a LIST
// No importa orden
// No hay duplicados

let setAlumnos = new Set([
    "Juan Perez",
    "Antonio Rodriguez",
    "Ana Santos",
    "Sara Gómez",
    "Pedro Nuñez"
]);

// 2.a. Introduce "Sofia López" al final
setAlumnos.add("Sofia Lopez");

// 2.b. Introduce "Hugo González" al principio
setAlumnos.delete("Hugo González");

// 2.c. Comprobar existencia
console.log(setAlumnos.has("Hugo González"));

// 2.d. Tamaño del conjunto
console.log(setAlumnos.size);

console.table(setAlumnos);

// 3. Elimina los duplicados de la siguiente lista de la compra
// Huevo
// Leche
// Carne
// Cereales
// Leche

let listaCompra = [
    "Huevo",
    "Leche",
    "Carne",
    "Cereales",
    "Leche"
];

let setListaCompra = new Set(listaCompra);

listaCompra = [...setListaCompra];

console.table(listaCompra);

// 4. Crea un listin telefonico
let listin = new Map();

listin.set("Juan Perez", "600123456");
listin.set("Dolores Rodriguez", "611222333");
listin.set("Sara Gomez", "700444564");

console.table(listin);

// 4.a. Accedemos al valor de la clave "Sara Gomez"
console.log(`El telefono de sara es ${listin.get("Sara Gomez")}`);

// 4.b. Eliminamos los datos de "Dolores Rodriguez"
listin.delete("Dolores Rodriguez");

// 4.c. Obtener conjunto de claves
let claves = listin.keys();

// 4.c. Obtener conjunto de valores
let valus = listin.values();
