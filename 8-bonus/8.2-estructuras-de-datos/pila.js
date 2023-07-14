/* class Pila {
    constructor() {
        this.pila = [];
    
    }
    push(nuevoValor){
        this.pila.push(nuevoValor);
    }

    pop(){
        return this.pila.pop;
    }

    peek(){

    }

    print(){
        console.log(this.pila);
    }
}
const pila1 = new Pila();
 */
/* ------------------------------------------------------- */
class PilaObjeto {
    constructor() {
        this.pila = {}
        this.contador = 0;
    }
    push(nuevoValor){
        this.pila[this.contador] = nuevoValor;
        this.contador++;
    }

    pop(){
        let datoEliminado = this.pila[this.contador -1];
        delete this.pila[this.contador -1];
        this.contador--;
        return datoEliminado
    }

    peek(){
        return this.pila[this.contador -1];
    }

    sixe(){
        return this.contador;
    }

    print(){
        console.log(this.pila);
    }
}

let pilaObjeto1 = new PilaObjeto()

//agregamos valores

pilaObjeto1.push('holamundo');
pilaObjeto1.push(['mali', 2121221221, 'sadad@sadadsad.com']);
pilaObjeto1.push('etert');
pilaObjeto1.push('holamertetundo');
pilaObjeto1.push('holamdgfdgfgundo');

pilaObjeto1.print()

/* -------------queue------------------ */

class Cola {
    constructor() {
        this.cola = []
    }
    //metodos

    enqueue(){
        this.cola.push([]);
    }

    dequeue(){
        this.cola.shift();
    }
    //retorna el primer elemonto de la cola sin quitarlo de la cola
    peek(){
        return this.cola[0];
    }
    //retornar el tamaño de nuestra cola
    size(){
        return this.cola.length
    }
    // retorna si la cola esta vacia o no
    isEmpty(){
        if (this.cola.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    print(){
        console.log(this.cola);
    }

    front(){
        return this.cola[0];
    }

    back(){
        return this.cola[this.cola.length -1];
    }
}

let cola1 = new Cola();

cola1.enqueue(1);
cola1.enqueue('hola');
cola1.enqueue(true);

console.log(`se elimino: ${cola1.dequeue()}`);
console.log(`el primer elemento es: ${cola1.front()}`);
console.log(`el ultimo elemento es: ${cola1.back()}`);
console.log(`estatos cola: ${cola1.isEmpty()}`);