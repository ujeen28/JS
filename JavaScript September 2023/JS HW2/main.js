// // Масиви та об'єкти:
// // - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//  let arr=[1, 999, 'Ujeen', {'Stary': 457 }, false, true, "sdhfhsd"]
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])
// console.log(arr[6])
// console.log(arr[7])
//
//
// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book={
//     title: `shfjdfdjsdfhj`,
//     pageCount: "jfsdjfjksdf",
//     genre: 'dfdjjdsfjk'
//
// }
// console.log(book)
//
// let book1={
//     title: `shfjdfdjsdfhj`,
//     pageCount: "jfsdjfjksdf",
//     genre: 'dfdjjdsfjk'
//
// }
// console.log(book1)
//
// let book2={
//     title: `shfjdfdjsdfhj`,
//     pageCount: "jfsdjfjksdf",
//     genre: 'dfdjjdsfjk'
//
// }
// console.log(book2)
// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// // Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//
// let bookauthor={
//     title:"fjsjdfjsdff",
//     pageCount: 457,
//     genre:'Horror',
//     authors:[{name: 'Ujeen'}, {age: 148}]
//
// }
// console.log(bookauthor)
// // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// // Вивести в консоль пароль кожного користувача
//
// let massUser=[
//     {name: "Pedro", username:"Star", password: "Djingl1"},
//     {name: "Pedro1", username:"Star", password: "Djingl"},
//     {name: "Pedro2", username:"Star", password: "Djingl"},
//     {name: "Pedro3", username:"Star", password: "Djingl"},
//     {name: "Pedro4", username:"Star", password: "Djingl"},
//     {name: "Pedro5", username:"Star", password: "Djingl"},
//     {name: "Pedro6", username:"Star", password: "Djingl"}
// ]
//
// console.log(massUser[0].password)
// console.log(massUser[1].password)
// console.log(massUser[2].password)
// console.log(massUser[3].password)
// console.log(massUser[4].password)
// console.log(massUser[5].password)
// console.log(massUser[6].password)
// //
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -


// let x=+prompt()
// if (x!=0){
//     console.log('Вірно')
// }
// else {
//     console.log(' Не вірно')
// }
// - Дано змінну time яка рівна числу від 0 до 59.

// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let b=+prompt('Enter the namber from 0 to 59')
// if (b>=0 && b<=15){
//     console.log('1 part')
// }
// else if (b>15 && b<=30){
//     console.log('2 part')
// }
// else if (b>30 && b<=45){
//     console.log('3 part')
// }
// else if (b>45 && b<=59){
//     console.log('4 part')
// }
// else{
//     console.log('EROR')
// }





// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це
// число (у першу, другу чи третю).

// let c=+prompt()
// if (c>0 && c<=15) {console.log('1 decade')}
// else if (c>15 && c<=31){
//     console.log('2 decade')
// }
// else {
//     console.log("EROROOOOO")
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер
// дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану
// на день, назву дня англійською).


// let d=+prompt('Enter day')
// switch (d){
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Thuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('Eror')
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// let f=prompt()
// let d=prompt()
// if (f === d){
//     console.log('Equal')
// }
// else if (f>d){
//     console.log('F more than D')
//     }

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"
//         33якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


// let x= false || "default"
// console.log(x)
//
// let x1= null
// if (!x1){
//     x1="default";
//     console.log(x1)
// }
// else console.log(x1)
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
//     кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести
//     в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration >= 5 ) {
    console.log("Super course")
}if (coursesAndDurationArray[1].monthDuration >= 5 ) {
    console.log("Super course")
}if (coursesAndDurationArray[2].monthDuration >= 5 ) {
    console.log("Super course")
}if (coursesAndDurationArray[3].monthDuration >= 5 ) {
    console.log("Super course")
}if (coursesAndDurationArray[4].monthDuration >= 5 ) {
    console.log("Super course")
}if (coursesAndDurationArray[5].monthDuration >= 5 ) {
    console.log("Super course")
}
else console.log("Some shit")



