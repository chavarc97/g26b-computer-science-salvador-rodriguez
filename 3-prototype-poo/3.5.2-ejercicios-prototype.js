/**
 * Crear un objeto "contador" con un método "incrementar" que aumente un valor "valorActual"
 *  en 1 y otro método "obtenerValor" que devuelva el valor actual.
 */
const count = {
    value: 0,

    add1(){
        return this.value++;
    },
    
    sustract(){
        return this.value--;
    },

    getData(){
        return this.value;
    },
}

count.add1();
count.add1();
count.add1();
count.add1();
count.sustract();
count.add1();
count.add1();
count.add1();
count.add1();
count.sustract();

console.log(count.getData());
/**
 * Crear una función "ordenarArray" que acepte un array 
 * de números como parámetro y devuelva el array 
 * ordenado de menor a mayor.
 */

const array = [80,9,700,40,1,5,200];

function arrayOrder(a,b) {
    return a-b;   
}

console.log(array.sort(arrayOrder));

/**
 * Crear una clase "Rectangulo" con propiedades "ancho" 
 * y "alto" y un método "area" que calcule el área del 
 * rectángulo.
 */

class Rectangulo {
    constructor(largo, ancho) {
        this.largo = largo;
        this.ancho = ancho;
    }

    area(){

        return this.largo * this.ancho;
    }
}

const rec1 = new Rectangulo(20, 30);
console.log(rec1.area());


/**
 * Crear una función "factorial" que acepte un número 
 * como parámetro y devuelva su factorial 
 * (el producto de todos los números enteros positivos
 *  desde 1 hasta el número).
 */

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1
    } else{
        return number * factorial(number-1);
    }
}

console.log(factorial(5));


/**
 * Crear un objeto "agenda" que permita agregar, 
 * eliminar y buscar contactos. Cada contacto debe 
 * tener un nombre, un email y un teléfono.
 */

const agenda = {
    contacts: [];
}