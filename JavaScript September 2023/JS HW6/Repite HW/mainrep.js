// // // // - Знайти та вивести довижину настипних стрінгових значень
const arr = ['hello world', 'lorem ipsum', 'javascript is cool'];

arr.map((NewArray) =>
    console.log(NewArray.length))

// // // // - Перевести до великого регістру наступні стрінгові значення
const arr2 = ['hello world', 'lorem ipsum', 'javascript is cool'];

let arr57 = arr2.map((item) => item.toUpperCase())
console.log(arr57)

// - Перевести до нижнього регістру настипні стрінгові значення
const arr3 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];

let arr58 = arr3.map((item3) => item3.toLowerCase())
console.log(arr58)

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.trim(' '))

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str2 = 'Ревуть воли як ясла повні';

console.log(str2.split(' '))

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let mass45 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]

console.log(mass45.map((mass1) => mass1.toString()))

// // - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.


let Mass = [45, 47, 65, -57, 5665, 4572,]

let sortMass = Mass.sort((a, b) => {
    return a - b;
})
console.log(sortMass)

// // - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.


let SortMassNew = (massiv, direction) => {
    if (direction === 'Min') {
        return massiv.sort((a, b,)=> a - b)}

    if (direction === 'Max') {
        return massiv.sort((a, b,)=> b - a)


    }

}
console.log(SortMassNew([45,65,-655,458], 'Max'))
console.log(SortMassNew([45,65,-655,458], 'Min'))