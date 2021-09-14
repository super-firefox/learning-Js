class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(value){
        if(this.length === 0) {
            this.head = new Node(value);
        } else {
            let current = this.head;

            while(current.next) {
                current = current.next;
            }

            current.next = new Node(value);
        }

        this.length++;
    }

    insert(position, value) {
        if(position < 0 || position > this.length){
            return false;
        }

        let node = new Node(value);

        if(position === 0){
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            let prev = null;
            let index = 0;

            while(index < position){
                prev = current;
                current = current.next;
                index++;
            }

            prev.next = node;
            node.next = current;
        }
        this.length++;
        return true;
    }

    get(position) {
        if(position < 0 || this.length <= position){
            return false;
        }

        let current = this.head;
        let index = 0;

        while(index < position){
            current = current.next;
            index++;
        }

        return current.value;
    }

    removeAt(position) {
        if(position < 0 || this.length <= position){
            return null;
        }

        let current = this.head;

        if(position === 0) {
            this.head = current.next;
        } else {
            let prev = null;
            let index = 0;

            while(index < position){
                prev = current;
                current = current.next;
                index++;
            }

            prev.next = current.next;
        }

        this.length--;
        return current.value;
    }

    remove(element) {
        this.removeAt(this.indexOf(element));
    }

    indexOf(element) {
        let current = this.head;
        let index = 0;

        while(current){
            if(current.value === element){
                return index;
            }

            current = current.next;
            index++;
        }

        return -1;
    }

    size() {
        return this.length;
    }

    isEmpty(){
        if(this.length === 0){
            return true;
        }
        return false;
    }

    print() {
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }
}

let list = new LinkedList();

function addItem() {
    console.log('\n AddItem');

    list.add({a:1});
    list.add({a:2});
    list.add({a:3});

    list.print();
}

addItem();
