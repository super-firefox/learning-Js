interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const recr1: Rect = {
    id: '12345',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

const recr2: Rect = {
    id: '11111',
    size: {
        width: 10,
        height: 40
    },
}
recr2.color = 'black';
// recr2.id = "4444";

//приведення типів
const rect3 = {} as Rect;
const rect4 = <Rect>{};

//=================
interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5:RectWithArea = {
    id: '5',
    size: {
        width: 100,
        height: 200,
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
}

//=============================
interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date();

    setTime(date: Date): void {
        this.time = date;
    }
}

//=============
interface Style {
    [key: string]: string
}

const css: Style = {
    border: '1px solid black',
    borderTop: '2px',
    borderRadius: '5px'
}