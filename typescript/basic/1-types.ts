const isFetching: boolean = true;
const isLoading: boolean = false;
let int: number = 42;
const float: number = 4.2;
const num: number = 3e10;
const message: string = 'Hello Typescript';
const numberArray: number[] = [1, 2, 3, 4, 13];
const numberArray2: Array<number> = [1, 2, 3, 4, 13];
const words: string[] = ['Hello', 'Typescriot'];
//Tuple
const contact: [string, number] = ['Ihor', 987520477];
//Any 
let variable: any = 42;
//....
variable = 'New Strig'
//function
function sayName(name: string): void {
    console.log(name);
}
sayName('Ihor');
//Never
function throwError(message: string): never {
            throw new Error(message);
}

function infinite() {
    while(true) {

    }
}

// Type (==alias)
type Login = string;
const login: Login = 'admin';
// const login2: Login = 2;

type ID = string | number;
const id1: ID = '134';
const id2: ID = 124;
// const id3: ID = true; 