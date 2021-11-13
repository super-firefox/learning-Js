async function onButtonClick(){
    console.log('click1');
    const result = await fetch('https://my-json-server.typicode.com/typicode/demo/posts');
    console.log(result);
    setTimeout(() => console.log('click set1'), 30);
    setTimeout(() => console.log('click set2'), 1000);
    setTimeout(() => console.log('click set3'), 0);
    console.log('click2');
    console.log('click3');
    console.log('click4');
    console.log('click5');
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', onButtonClick);