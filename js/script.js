
// //class -> .CLASS_NAME
// //id -> #ID

// const a = document.querySelector('a');
// const h1 = document.querySelector('h1');
// const input = document.querySelector('input');
// const p = document.querySelector('p');
// const oldHref = a.getAttribute('href');
// //
// const box1 = document.querySelector('#box1');
// const box2 = document.querySelector('#box2');

// h1.textContent = 'changed from JS';
// a.setAttribute('href', 'https://ya.ru');
// a.textContent = 'Yandex';
// a.setAttribute('title', 'yaaaa');
// p.innerHTML = '<h2 style="color: red;">from JS</h2>';


// box1.classList.add('blue');
// box2.classList.add('yellow');
// box1.classList.remove('blue');
// const hasClass = box2.classList.contains('blue');
// console.log(hasClass);

// if (hasClass) {
//     box1.classList.remove('blue');
// } else {
//     box1.classList.add('blue');
// }
// Добавление событий Урок 29

const button = document.querySelector('button'),
      h1 = document.querySelector('h1'),
      input = document.querySelector('input');

button.addEventListener('click', () => {
    console.log('clicked!');
    h1.textContent = input.value;
});

h1.addEventListener('mouseenter', function () {
    this.style.color = 'red';
    this.style.backgroundColor ='black';
})
h1.addEventListener('mouseleave', function () {
    this.style.color = 'black';
    this.style.backgroundColor ='transparent';

    
})