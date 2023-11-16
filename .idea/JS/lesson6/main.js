// - створити функцію яка приймає будь-яку кількість чисел,
//   повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function foo(...nums) {
//     let max = 0;
//     let min =Infinity;
//     for (const num of nums) {
//         if (num >= max) {
//             max = num;
//         } if (num < min ) {
//             min = num;
//         }
//     }
//     return console.log(`max = ${max} min = ${min}`)
// }
//
// foo(1,2,3,-45784,5,455774454445)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let z = 0
// let x = (a) => {
//     for (i = 0; i < a.length; i++) {
//         z += a[i]
//     }
//         // document.write(y)
//     return console.log(z)
// }
//
// x([3, 47, 45])
// let x=0
// let massiv=(a)=>{
//     for(let i=0; i<a.length; i++)
//     {
//         x += a[i]/a.length
//
//     } console.log(x)
// }
// massiv([145,451,145,457,475])


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


// let massiv=(length)=>{
//     let arr = [];
//
//     for (let i=0; i < length; i++) {
//         arr[i] = Math.random() * 100
//     }
//
//     return arr;
// }
//
// console.log(massiv(10));
// console.log(massiv(5));
// console.log(massiv(20));

// let massiv=()=>{
//     let arr=[]
//     for ( let i=0; i<100; i++){
//         arr[i]=Math.random()*100
//     }
//     return arr
// }
//
// console.log(massiv())


// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.


let x=(a)=>{
let arr=[]
    for ( i=a.length-1; i>=0; i--)
    {return a[i]
        for (j>0; j<arr.length; j++){
            arr[j]=a[i]
        }return arr
    }



}
console.log(arr)
x([145,147,1457])
//
// let x=(a)=>{
//     for(i=a.length-1;i>=0;i--)
//     {
//         document.write(a[i])
//     }
//
// }
// x([1455,145,14777])

