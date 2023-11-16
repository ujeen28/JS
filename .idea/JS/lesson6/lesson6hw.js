// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let x=(a)=>{
//     console.log(a.length)}
// x('hello world')
// x('lorem ipsum')
// x('javascript is coll')


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'


// let x=(a)=>{
//     console.log(a.toUpperCase())
// }
// x('hello world')
// x('lorem ipsum')
// x('javascript is coll')


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let x=(a)=>{
//     console.log(a.toLowerCase())
// }
//
// x( 'HELLO WORLD')
// x('LOREM IPSUM')
// x('JAVASCRIPT IS COOL')
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

//
// let str=' dirty string   '
// console.log(str.replaceAll(' ','').replaceAll('di',''))

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


// let str=('Ревуть воли як ясла повні')
// let arr=str.split(' ')
//
// console.log(arr)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку
// перетворити всі об'єкти в масиві на стрінгові.
//
// let arr=[10,8,-7,55,987,-1011,0,1050,0]

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує
// його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3]
// nums.sort(function (a,b){
//     return b-a
// })
// console.log(nums)


// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // coursesAndDurationArray.sort(function (a,b){
// //     return a.monthDuration-b.monthDuration
// //
// // })
// // console.log(coursesAndDurationArray)
//
//
// for (let coursesAndDurationArrayElement of coursesAndDurationArray) {
//     if (coursesAndDurationArray.title === 'Java Complex'){
//         console.log(coursesAndDurationArrayElement)}
//
// }

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// let cards=[
//     {name: 'six',color: 'black',cardSuit:'pika' },
//     {name: 'six',color: 'black',cardSuit:'krest' },
//     {name: 'six',color: 'red',cardSuit:'chirva' },
//     {name: 'six',color: 'red',cardSuit:'bybna' },
//     {name: 'seven',color: 'black',cardSuit:'pika' },
//     {name: 'seven',color: 'black',cardSuit:'krest' },
//     {name: 'seven',color: 'red',cardSuit:'chirva' },
//     {name: 'seven',color: 'red',cardSuit:'bybna' },
//     {name: 'eight',color: 'black',cardSuit:'pika' },
//     {name: 'eight',color: 'black',cardSuit:'krest' },
//     {name: 'eight',color: 'red',cardSuit:'chirva' },
//     {name: 'eight',color: 'red',cardSuit:'bybna' },
// ]
//
//
// for (let card of cards) {
//     if (card.name === "six"){
//         console.log(card)
//     }
// }

// for (const card of cards) {
//     if (card.cardSuit === 'pika') {
//         console.log(card)
//     }
// }











// console.log(cards.map(card => card.cardSuit === 'pika'));



//
// cards.find(cardsstatus=>cardsstatus.cardSuit)
// if ()

// console.log(cards)



// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та
// колбеку перетворити всі об'єкти в масиві на стрінгові.




// let x=prompt('What color du you see?')
// let y=prompt('Do you see car?')
// if (x=== 'green' && y === 'no'){
//     console.log('You can go')
// }
// else if( x==='green' && y === 'yes'){
//     console.log('Please wait')
// }
// else if( x==='yellow' && y === 'no'){
//     console.log('You can go')
//     }
// else if( x=== 'yellow' && y=== 'yes'){
//     console.log('Stay where you are')
// }
// else if( x=== 'red' ){
//     console.log('Stay where you are')
// }
// else console.log('Stay where you are')









