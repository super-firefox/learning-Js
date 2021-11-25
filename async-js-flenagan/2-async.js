async function f() {
    return {name: 'Ihor'};
}

const a = async () => 6;

b = {
    bi: () => 70,
    ci: async function(){
        return 'async function';
    }
}

async function main() {
    let data = await f();
    let n = await a();
    console.log(data, n)
    console.log(b.bi())
    console.log(b.ci())
}

main();