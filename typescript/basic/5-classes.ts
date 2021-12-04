class Typescript {
    version: string;

    constructor(version: string) {
        this.version = version;
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`;
    }
}

class Car {
    readonly model: string;
    readonly numberOfWheels: number = 4;

    constructor(theModel: string) {
        this.model = theModel;
    }
}

//modefications
class Animal {
    protected voice: string = '';
    public color: string = 'black';

    constructor() {
        this.go();
    }

    private go(): void {
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoie(voice: string): void {
        this.voice = voice;
    }
}

const cat = new Cat();
cat.setVoie('test');
console.log(cat.color);

//=====================

abstract class Component {
    abstract render(): void;
    abstract info(): string;
}

class AppComponent extends Component {
    render(): void{
        console.log('Component on render');
    }

    info(): string {
        return 'This is info'
    }
}