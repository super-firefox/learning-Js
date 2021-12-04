interface Person {
    name: string
    age: number
}

type PersonKeys  = keyof  Person; // 'name' | 'age'

let key: PersonKeys = 'name';
key = 'age';
// key = 'dog'

type User = {
    _id: string
    name: string
    email: string
    createAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, 'id' | 'createAt'>; // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>;

const u1: UserKeysNoMeta1 = 'name';
// u1 = '_id';

// const u2: UserKeysNoMeta2 = 'email';
