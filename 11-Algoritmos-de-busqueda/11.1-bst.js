/**
 * Un árbol binario de búsqueda (Binary Search Tree o BST) es una estructura de datos 
 * en la que cada nodo tiene, como máximo, dos hijos (izquierdo y derecho), y para 
 * cada nodo, todos los valores en el subárbol izquierdo son menores que el valor 
 * del nodo y todos los valores en el subárbol derecho son mayores.
 * 
 *  
 * 
 * A continuación, te mostraré cómo implementar un Binary Search
 * Tree en JavaScript:
 */

//   NODE   //
class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

//   BINARY SEARCH TREE   //

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert new value in our tree
    insert(value){
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (true) {
            if (value === current.value) return undefined 
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }

                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }             
        }
    }

    // search in tree function
    search(value){
        if(!this.root) return false
        
        let current = this.root;
        while (current){
            if(value === current.value) {
                console.log('I am here, node:', value);    
                return true
            }
            if (value<current.value) {
                current = current.left;
                console.log('i went left', value);
            } else{
                current = current.right;
                console.log('I went right', value);
            }
            return false
        }
    }

    // check if empty tree ()
    isEmpty(){
        return this.root === null
    }

    delete(){
        
    }
}

const bst = new BinarySearchTree();
bst.insert(12);
bst.insert(13);
bst.insert(3);
bst.insert(2);
bst.insert(4);
bst.insert(11);
bst.insert(16);
bst.insert(18);
bst.insert(15);
bst.insert(17);
bst.insert(19);

/* console.log('search in binary tree started');
console.log(bst.search(12));
console.log('search ended');
console.log('-------------------------');

console.log('search for node 19 in binary tree');
console.log(bst.search(19));
console.log('search ended')
console.log('-------------------------');

console.log('search for node 7 in binary tree');
console.log(bst.search(7));
console.log('search ended')
console.log('-------------------------');

console.log(bst.isEmpty()); */

/* 
            ----12----
        -3-         -16-
*/


