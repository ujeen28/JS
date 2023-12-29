// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function S(a,b) {
//    S=a*b;
//     console.log(S)
//
// }
// S(10,15)
// function S(a,b){
//     return a*b
// }
//
// console.log(S(10, 25))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function Skola(d) {
//     Skola=d*d*Math.PI
//     console.log(Skola)}
//
// Skola(14)
//
// function SSSSkola(r){
//     return r*r*Math.PI
// }
//
// console.log(SSSSkola(10))
//
// }
//
// function SKKola(r) {
//     return SKKola=r*r*Math.PI
//
// }
//
// console.log(SKKola(15))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function Cilindr(h,r) {
//   return h*r*r*Math.PI
//
// }
//
// console.log(Cilindr(10,25))
// - створити функцію яка приймає масив та виводить кожен його елемент
// function ArrF(arrey) {
//     for (const arreyElement of arrey) {
//         console.log(arreyElement)
//
//     }
//
// }
// ArrF(['sdjfsdf',45577, false])
// ArrF(sdfsdfsdf,fsfsdf,44554,false)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function TextCreator(text) {
//     document.write(`<div><h1> ${text} </h1></div>`)
//
// }
// TextCreator('sdfhjsdfhjsdfhshdfhgshdfhj')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function LiCreator(textLi) {
//     document.write(`<ul>
//
//         <li>${textLi}</li>
//         <li>${textLi}</li>
//         <li>${textLi}</li>
//     </ul>`)
//
// }
// LiCreator('hsdhfsdfhsdfhshdhhdshjds')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ulCreator(a,b) {
//
//     for (i=0; i<b; i++){
//         document.write(`<li>${a}</li>`)
//     }
//     document.write(`</ul>`)
// }
// ulCreator('hdshfhshdfhjsdhfhsdfh', 15)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function MassCreator(arr) {
//     document.write(`<ul>`)
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//
//     document.write(`<ul>`)
//
// }
// MassCreator(["jdsjfjsdf","fsdfsdf",4544,false])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.


// const users = [
//     {id: 1, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 3, name: 'kolya', age: 29},
//     {id: 4, name: 'olya', age: 28},
//     {id: 5, name: 'max', age: 30},
//     {id: 6, name: 'anya', age: 31},
//     {id: 7, name: 'oleg', age: 28},
//     {id: 8, name: 'andrey', age: 29},
//     {id: 9, name: 'masha', age: 30},
//     {id: 10, name: 'olya', age: 31},
//     {id: 11, name: 'max', age: 31}
// ];
// function ArrCrrrr(arrey) {
//     for (const arr of arrey) {
//         document.write(`<li>${arr.name}  - ${arr.id} - ${arr.age} </li>`)
//
//
//     }
//
// }
// ArrCrrrr(users)



// - створити функцію яка повертає найменьше число з масиву
// function arreyMin(arrey) {
//     let arrmin=arrey[0]
//     for (const arr of arrey)
//                 if (arrmin > arr)
//             arrmin=arr
//
// return arrmin;
//
//
// }
//
// console.log(arreyMin([14,454,4454,44445,444,4444,5,44,4,55,78,7]))
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13


// function SummArr(arey) {
//     let arrSum=0
//     for (const areyElement of arey) {
//         arrSum +=areyElement
//
//     }
//     return arrSum
// }
//
// console.log(SummArr([4,454,4,54,77,8,]))
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function SwAP(arr, index1, index2){
//     let x= arr[index1]
//      arr[index1]=arr[index2]
//     arr[index2]=x
// return arr
// }
//
// console.log(SwAP([1455,333,9999,8888],1,2))


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250