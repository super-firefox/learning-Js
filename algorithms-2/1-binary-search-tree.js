class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.rigth = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add() {
        this.root = addWithin(this.root, value);

        function addWithin(node, value) {
            if (!node) {
                return new Node(value);
            }

            if(node.value === value){
                return node;
            }
        }
    }
}

function addItem() {

}

function getItem() {

}

function removeItem() {

}

const bst = new BinarySearchTree();

addItem();
getItem();
removeItem();