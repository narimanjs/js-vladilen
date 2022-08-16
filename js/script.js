
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

// Урок 29 Добавление событий 

// const button = document.querySelector('button'),
//       h1 = document.querySelector('h1'),
//       input = document.querySelector('input');

// button.addEventListener('click', () => {
//     console.log('clicked!');
//     h1.textContent = input.value;
// });

// h1.addEventListener('mouseenter', function () {
//     this.style.color = 'red';
//     this.style.backgroundColor ='black';
// })
// h1.addEventListener('mouseleave', function () {
//     this.style.color = 'black';
//     this.style.backgroundColor ='transparent';
    
// })
// Урок 30 Всплытие и погружение
// const divs = document.querySelectorAll('div');
// for(let i = 0; i < divs.length; i++) {
//     divs[i].addEventListener('click', function(event) {
//         event.stopPropagation();
//         console.log(this.getAttribute('id'));
//     })
// }
// Урок 30 Всплытие и погружение
// const divs = document.querySelectorAll('div'),
//       link = document.querySelector('a');
// for(let i = 0; i < divs.length; i++) {
//     divs[i].addEventListener('click', function(event) {
//         event.stopPropagation();
//         console.log(this.getAttribute('id'));
//     })
// }
// link.addEventListener('click', (event) => {
//     event.preventDefault();
//     const div = divs[0];
//     div.style.display = div.style.display === 'none'
//     ? 'flex'
//     : 'none'

// Урок 31 Делегирование событий
// const p = document.querySelectorAll('p');

// for (let i = 0; i < p.length; i++) {
//     p[i].addEventListener('click', (event) => {
//         event.target.style.color = 'blue'
//     })
// }
document.querySelector('.wrapper').addEventListener('click', function(event) {
   const tagName = event.target.tagName.toLowerCase();
   if (tagName === 'p') {
    event.target.style.color = 'blue';
   }
   if(event.target.classList.contains('color')) {
    event.target.style.color = 'yellow'
   }
})
