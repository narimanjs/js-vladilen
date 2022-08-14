
//class -> .CLASS_NAME
//id -> #ID

const a = document.querySelector('a');
const h1 = document.querySelector('h1');
const input = document.querySelector('input');
const p = document.querySelector('p');
const oldHref = a.getAttribute('href');


h1.textContent = 'changed from JS';
a.setAttribute('href', 'https://ya.ru');
a.textContent = 'Yandex';
a.setAttribute('title', 'yaaaa');
p.innerHTML = '<h2 style="color: red;">from JS</h2>';

console.log(input.value);
console.log(h1.textContent);
console.log(a.attributes);