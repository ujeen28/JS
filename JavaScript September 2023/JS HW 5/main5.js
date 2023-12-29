// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let Plosha=(a,b)=>a*b*Math.PI
// console.log(Plosha(10, 15 ))
// console.log(Plosha(25,25))
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// let Skolla=(r)=>r*r*Math.PI
// console.log(Skolla(10))
// console.log(Skolla(25))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let Scilindra=(h,r1)=>2*r1*Math.PI*h
// console.log(Scilindra(10,15))


// - створити функцію яка приймає масив та виводить кожен його елемент

// let ArrFunk=(array)=>{
//     for (const arr of array){
//         console.log('item : ',arr)
//
//     }
// }
// ArrFunk([1455,7777,77777,47784,'Privet'])
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let TextBuilder=(text)=>document.write(`<div><p>${text}</p></div>`)
// TextBuilder("shfhshdhf fshdfhsdf sjkdfhsf hsdjfhsjdkf sjkdfhsjdfh")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let LiCreator = (SomeText) =>document.write(`<ul>
//     <li>${SomeText}</li>
//     <li>${SomeText}</li>
//     <li>${SomeText}</li>
// </ul>`)
//
// LiCreator('jsdfjjsdf sjdfkjsdf sjfdkjskdf')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let LiCreatorNew=(Text, Count)=>{
// document.write(`<ul>`)
//     for (let i=0; i<Count; i++){
//         document.write(`<li>${Text}</li>`)
//     }
// document.write(`</ul>`)}
//
// LiCreatorNew('hsdfhshdf shjfdhsdhf shfjdkhsjdf', 100)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let CreatLIST=(array)=>{
//     document.write(`<ul>`)
//     for (const arr of array) {
//         document.write(`<li>${arr}</li>`)
//
//     }
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
//     document.write(`</ul>`)
// }
// CreatLIST(['sdfjsdjf', 'sdhfhsdfh', false, 454446])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let MassCreator=(mass)=>{
//         document.write(`<ul>`)
//     for (let mass1 of mass) {
//         document.write(`<li>'ID':${mass1.id} </li>`)
//         document.write(`<li>'NAME':${mass1.name} </li>`)
//         document.write(`<li>'AGE':${mass1.age} </li>`)
//     }
//         document.write(`</ul>`)
//
// }
// MassCreator(users)

// - створити функцію яка повертає найменьше число з масиву

// let Minimator=(array)=>{
//     let min=arr[0];
//     for (const arr of array) {
//
//         if (min>arr[i]) min=arr[i]
//     }
//         return min;
// }
// console.log(Minimator([4,5,3], 'min'))



// let MiniMa=(array)=>{
//     let min=array[0]
//     for (let i=0; i<array.length; i++){
//         if (min>array[i]){
//             min=array[i]
//         }
//     }return min
// }
//
// console.log(MiniMa([1,45,-87,87,52,98]))

// let MiniMator2=(array)=>{
//     let min=array[0];
//     for (const arr of array) {
//         if(min>arr){
//             min=arr
//         }
//     }return min
// }
//
// console.log(MiniMator2([1,45,-87,87,52,-98]))
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
// let SummaTor=(array)=>{
//     let sum=0;
//     for (const arr of array) {
//         sum+=arr
//
//     }return sum
// }
// console.log(SummaTor([25,14,4,5,4,-87,4000]))
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let Swapper=(arr,index1, index2)=> {
    for (const arr1 of arr) {
    let x = arr[index1]
        arr[index1] = arr[index2];
        arr[index2]=x;

    }return arr
}

console.log(Swapper([1111,2222,3333,4444,444555],0  ,3 ))
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250