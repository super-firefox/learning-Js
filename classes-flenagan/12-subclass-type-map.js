class TypeMap extends Map {
    constructor(keyType, valueType, enteries) {
        if(enteries){
            for(let [k, v] of enteries) {
                if(typeof k !== keyType || typeof v !== valueType) {
                    throw new TypeError(`Нерпавильний тип для запису [${k}, ${v}]`);
                }
            }
        }

        //* Не можна використовувати this в своєму сонструкторі
        //* поки не буде викликаний конструктор суперкласу за допомогою super()
        //* тому що суперкласси повинні ініціювати себе перед підкласом
        super(enteries);

        this.keyType = keyType;
        this.valueType = valueType;
    }

    //* override
    set(key, value) {
        if(this.keyType && typeof key !== this.keyType) {
            throw new TypeError(`${key} не відноситься до типу ${this.keyType}`);
        }

        if(this.valueType && typeof value !== this.valueType) {
            throw new TypeError(`${value} не відноситься до типу ${this.valueType}`);
        }

        return super.set(key, value);
    }
}

let tm = new TypeMap("number", "string", [[1, "one"], [2, "two"]]);
console.log(tm);
tm.set(3, "three");
console.log(tm);