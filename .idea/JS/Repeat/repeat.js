

// let x=+prompt()
// if (x === 0){
//     console.log("ne virno")
// }
// else console.log("virno")
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
//     який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
// let time=+prompt()
// if (time <=15){
//     console.log('1 part')
// }
// else if (time>15 && time<=30){
//     console.log('2 part')
// }
// else if (time>30 && time<=45){
//     console.log('3 part')
// }
// else if (time>5 && time<=59){
//     console.log('4 part')
// }
// else console.log("eror")


// У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця
// потрапляє це число (у першу, другу чи третю)

// let day=+prompt("Enter day of month")
// if (day<=10){
//     console.log('1 part')
// }
// else if (day>10 && day<=20){
//     console.log('2 part')
// }
// else if (day>20 && day<=31){
//     console.log('3 part')
// }
// else console.log("eror")

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
//     відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


// let day=prompt("Enter day")
//
// switch (day){
//     case 'Monday':
//         console.log('1111111111');
//         break;
//     case 'Tuesday':
//         console.log('0000000')
//         break;
//     default:
//         console.log("Eror")
// }


// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let x=+prompt()
// let y=+prompt()
// if (x > y){
//     console.log(x)
// }
// else if(y > x){
//     console.log(y)
// }
// else
//     console.log("shdfhsdf")

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// let x="fjsdjkfjksdfjksjkdf"
// document.write(`<ul>`)
// for (i=0; i<10;i++){
//     document.write(`<li>${x}</li>`)
//
// }
// document.write(`</ul>`)
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// let x="fjsdjkfjksdfjksjkdf"
// document.write(`<ul>`)
// for (i=0; i<10;i++){
//     document.write(`<li>${i}-${x}</li>`)
//
// }
// document.write(`</ul>`)




// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let x="jfskjfsdjkfjksdfjk"
// let i=0
// while (i<20){
//     document.write(`<div><h1>${x} - ${i}</h1></div>`)
//     i++
// }

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`)
// for (const listOfItem of listOfItems) {
//     document.write(`<ol>${listOfItem}</ol>`)
//
// }
// document.write(`</ul>`)


// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// document.write(`<ul>`)
// for (const product of products) {
//         document.write(`<li>
// ${product.title}
// ${product.price}
// ${product.image}
//
//
//
//         </li>`)
//
//
// }
// document.write(`</ul>`)


//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// for (const user of users) {
//     if (user.age >29){
//         console.log(user)
//     }
//
// }
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
















































