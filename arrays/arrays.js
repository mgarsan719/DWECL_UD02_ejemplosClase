//EJ1 Playas favs

//CREAR ARRAY E ASIGNAR VALORES
function crearArray() {
    //Creacion Directa
    let playas = ["Chipiona", "Rota", "Matalascañas"];
    console.table(playas);

    //Creacion instancia + asignacion
    let playas2 = [];
    playas2[0] = "Chipiona";
    playas2[1] = "Rota";
    playas2[2] = "Matalascañas";

    console.table(playas2);

    //Creacion por instancia + asignacion por metodo
    let playas3 = [];
    playas3.push("Chipiona");
    playas3.push("Rota");
    playas3.push("Matalascañas");

    console.table(playas3);

}

//ELIMINAR INSTANCIAS
function eliminaInstancia() {
    playas3.pop(); //quita el ultimo
    playas3.shift(); //quita el primero
    console.table(playas3);

    playas3.push("Sanlucar");
    playas3.push("Mazagon");
    playas3.push("Fuengirola");
    playas3.push("Roquetas");
    playas3.splice(2, 1);//Le das posicion (2) y cuantos quieres que te borre (1)
    console.table(playas3);

}

//RELLENAR ARRAY
function rellenaArray() {
    let ceros = new Array(10); //Se le da tamaño
    ceros.fill(0) //Lo rellena con 10 ceros;
}


//SUSTITUIR EN ARRAY (=)
function asignaValor() {
    playas3[3] = "Playa de los muertos";
    console.table(playas3);

}

//CONVERSION DE ARRAY A STRING
function convierteString() {
    let playas_str = playas3.join(", ");
    console.log(playas_str);
}


//CONVERSION DE STRING A ARRAY
function convierteArray() {
    let playas_array = playas_str.split(", ");
    console.table(playas_array);
}

//VER POSICION POR VALOR
function verPosicionPorValor() {
    let nombre_playa = "Fuengirola"
    console.log(`La posicion de ${nombre_playa} es ${playas_array.indexOf(nombre_playa)}`);
}

//ORDENAR ARRAY
function ordenaArray() {
    playas_array.sort();
    console.table(playas_array);
}

//REVERTIR ARRAY
function revierteArray() {
    playas_array.reverse();
    console.table(playas_array);
}

//Ejercicio 2
// Realiza un array que almacene las notas de diez alumnos de clase
// Pinta la menor y mayor de todas
function act2() {

    let notas = new Array(10);

    for (let i = 0; i < notas.length; i++) {
        notas[i] = (Math.random() * 10).toFixed(2);
    }

    console.table(notas);

    notas.sort();
    console.log(`La nota menor es ${notas[0]} la nota menor es ${notas[notas.length - 1]}`);
}

// act2();

// Ejercicio 3
// Almacena en el array edades todas las edades (introducidas por prompt)
// Muestra la media, maxima y minima de todas ellas
function act2() {
    let edades = new Array(5);
    let media = 0;

    for (let i = 0; i < edades.length; i++) {
        edades[i] = parseInt((window.prompt(`Introduce la edad del alumno ${i}`)));
        media += edades[i];
    }

    console.log(`La edad maxima de la clase es ${Math.max(...edades)}`);
    console.log(`La edad minima de la clase es ${Math.min(...edades)}`);
    console.log(`La edad minima de la clase es ${media / edades.length}`);
}

function act3() {
    let edades = [18, 22, 25, 57, 66, 33, 12, 45, 17, 16, 15, 32, 12, 14, 25, 45, 24, 26, 28]
    let mediaEdad = 0;
    let numEdades=0;
    for (edad of edades) {
        if(edad>18 && edad<50){
            mediaEdad+=edad;
            numEdades++;
        }
    }

    console.log(`La edad media es ${Math.floor(mediaEdad/numEdades)}`);

    // EQUIVALENTE A:
    // const media2 = edades
    //     .filter((edad) => edad > 18 && edad < 50)
    //     .reduce((suma, edad) => suma + edad, 0);

    // console.log(`La edad media es ${media2}`);
}


// Eliminar el color verde de un array que almacena cinco colores 
// cualesquiera, entre ellos debe estar el verde
function act4(){
    const colores = ["rojo", "verde", "azul", "naranja", "morado"];
    const colores2 =[...colores];
    console.table(colores);

    
    for(let i=0; i<colores.length;i++){
        if(colores[i]==="verde"){
            colores.splice(i, 1);
        }
    }
    console.table(colores);

    colores2.splice(colores2.indexOf("verde"), 1);
    console.table(colores2);
}

// act4();


function act5(){
    // Supon un array ordenado alfabéticamente de frutas. (Aguacate, Banana, Chirimoya,
    // Dátil, Fresa, Guayaba, Kiwi, Limón, Naranja, Pera, Sandía, Uva, Yuca). Introduce el
    // melón de forma que el orden se mantenga usando splice.

    const frutas = ["Aguacate", "Banana", "Chirimoya", "Dátil", "Fresa", "Guayaba"
        , "Kiwi", "Limón", "Naranja", "Pera", "Sandía", "Uva", "Yuca"];

    frutas.push("Melon");
    frutas.sort();

    console.table(frutas);
}

// act5();


