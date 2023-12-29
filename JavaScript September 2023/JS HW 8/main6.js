// // Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//
//
// }
//
// let Users = [
//     new User(1, 'Petro', 'Petrov', 'petro@gmail', 56555485),
//     new User(4, 'Shevchenko', 'Ivan', 'hfsdfkjhds@gmail.com', 48799654),
//     new User(3, 'Sidor', 'Sodorov', 'hfsdfkjhds@gmail.com', 48799654),
//     new User(2, 'Ivan', 'Ivanov', 'hfsdfkjhds@gmail.com', 48799654),
// ]
// console.log(Users)
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(Users.filter((User) => !(User.id % 2)));
//
// // Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(Users.sort((u1, u2) => u1.id - u2.id))

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id,name,surname,email,phone,order) {
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        this.order=order;
    }

}
let newArray=[
    new Client(45,'asdjasjdas','asdasdawe','sjdfjds@','+555478965', 'sdfhhsdh'),
    new Client(34,'asdjasjdas','asdasdawe','sjdfjds@','+555478965', 'sdfhhsdh'),
    new Client(18,'asdjasjdas','asdasdawe','sjdfjds@','+555478965', 'sdfhhsdh'),
    new Client(-4,'asdjasjdas','asdasdawe','sjdfjds@','+555478965', 'sdfhhsdh')
]

console.log(newArray)

// console.log(newArray.sort((a,b)=>a.id-b.id))