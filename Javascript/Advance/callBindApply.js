// 'use strict'
// function greet(name, name){
//     console.log(name, name)
// }
// greet('ishan', 'rajat')

// console.log(globalThis);
// const person1 = {
//     name: "Ishan"
// };

// const person2 = {
//     name: "Rahul"
// };

// function sayHi() {
//     console.log("Hi, I'm " + this.name);
// }
// sayHi.call(person1)

// function introduce(city, country){
//     console.log(`I'm ${this.name} from ${city} of ${country}`);
    
// }
// const user1 = {
//     name: "Ishan"
// }
// introduce.apply(user1, ['Raipur', 'India'])

const user = {
    name: "Ishan",
    sayHi(){
        console.log(this.name)
    }
}
// setTimeout(())

user.sayHi()