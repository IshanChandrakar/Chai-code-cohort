// const person = {
//     x : 10,
//     firstName : "ishan",
//     lastName : 'chandrakar',
//     hobbies : ['chanting', 'kirtan']
// }
// console.log(person.hobbies);

// const teas = {
//     name: "lemon tea",
//     type: "green",
//     caffeine : "low"
// }
// teas.origin = "Assam"
// teas.caffeine = "medium"
// delete teas.type

// for(let key in teas){
//     console.log(`key ${key}: ${teas.key}`)
// }

const myTeas = {
    greenTea: {
        name: "Green Tea",
        caffeine: "Low",
    },
    blackTea: {
        name: "Black Tea",
        caffeine: "High",
    },
};
const teaCopy = {...myTeas}
myTeas.greenTea.milkContent = "None"
console.log(teaCopy);
