
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
// document.querySelector('.wrapper').addEventListener('click', function(event) {
//    const tagName = event.target.tagName.toLowerCase();
//    if (tagName === 'p') {
//     event.target.style.color = 'blue';
//    }
//    if(event.target.classList.contains('color')) {
//     event.target.style.color = 'yellow';
//    }
// })

// Урок 34 Взаимодействие с пользователем
// document.querySelector('#alert').addEventListener('click', () => {
//    alert('Вы успешно кликнули');
// })
// document.querySelector("#confirm").addEventListener('click', () => {
//    let decision = confirm('Вы уверены??')
//    console.log(decision);
//    if (decision) {
//       alert('Вы успешно кликнули');
//    }
// })
// document.querySelector('#prompt').addEventListener('click', () => {
//    prompt('Сколько вам лет?', '')
// })

// Урок 35 Методы массивов

// const str = '1,2,3,4,5,6,7,8,9'
// const array = str.split(','); // преобразовывает строку в массив
// // console.log(array);
// // console.log(array.join(';')); //преобразовывает  массив в строку
// // console.log(array.reverse()); //меняет порядок  массива
// // console.log(array.splice(0, 3, '11')); //первый параметр индекс, количество элементов которые хотим удалить
// const newArr = array.concat(['1',2])
// // console.log(newArr); //создает копию массива, возвращает новый массив

// const objArray = [
//    {name: 'Nar', age: 27},
//    {name: 'Elena', age: 18},
//    {name: 'Dana', age: 24}
// ]
// // console.log(objArray);
// const foundPerson = objArray.find(function(person) {
//    return person.age === 24;
// })
// // console.log(foundPerson);
// const oddArray = [1,2,3,4,5,5,8,9,10].filter(function(i) {
//    return i % 2 === 0;
// })
// // console.log(oddArray);
// console.log(array);
// const numArray = array.map(function(i) {
//    return i * 2
// })
// console.log(numArray);

// //36 Math
// const num = 2.9;
// console.log(Math.random());
// console.log(Math.floor(num));
// console.log(Math.ceil(num));

//37 JSON  Приводить объекты к строкам

// let person = {
//    name: 'Nar',
//    age: 26,
//    car: {
//       model: 'Tesla'
//    },
//    job: 'FrontEnd',
//    friends: ['Elena', 'Dana']
// } 
// console.log(person);
// console.log(JSON.stringify(person));

// Date
// const date = new Date();

// 39 LocalStorage
// document.querySelector('button').addEventListener('click', function(){

//    const value = document.querySelector('input').value
//    const obj = {
//       text: value
//    }
   
//    localStorage.setItem('headerText', JSON.stringify(obj))
// })

// document.addEventListener('DOMContentLoaded', function(){
//    var obj 
//    try {
//       obj = JSON.parse(localStorage.getItem('headerText'))
//    } catch (e) {
//       obj = {}
//    }
  

//    if (obj.text && obj.text.trim ()) {
//       document.querySelector('h1').textContent = obj.text
//    }
// })