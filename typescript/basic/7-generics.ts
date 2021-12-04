const arrayOfNumber: Array<number> = [1, 1, 2, 3, 5];
const arrayOfString: Array<string> = ['Hello', 'Ihor'];

function reverse<T>(array: T[]): T[] {
    return array.reverse();
}

let r1 = reverse(arrayOfNumber);
let r2 = reverse(arrayOfString);

console.log(r1, r2);

