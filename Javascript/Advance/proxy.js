// const user = {
//     name: "Ishan",
//     age: 25,
//     password: "123"
// }
// const proxyUSer = new Proxy(user,{
//     get(target, prop){
//         if(prop==='password')
//             throw new Error("access denied")
//         // return target[prop]
//     },
//     set(target, prop, user){

//     }
// })
// console.log(proxyUSer)

// const arr = [1,2,3,4,5]
// function negativeIndex(arr){
//     return new Proxy(arr,{
//         get(target, prop){
//             const index = Number(prop)
//             if(index<0)
//                 return target[target.length + index]
//             return target[index]
//         },
//         set(target, prop, value){
//             const index = Number(prop)
//             if(index<0)
//                 target[target.length + index] = value
//             else
//                 target[index] = value
//             return true
//         }
//     })
// }
// const proxyArray = negativeIndex(arr)
// proxyArray[-2] = 100
// console.log(arr);
// console.log(proxyArray);

// const obj = {
//     name: "ishan",
//     city: "raipur",
//     age: 25
// }
// const proxyObj = new Proxy(obj, {
//     get(target, prop){
//         if(prop in target)
//             return target[prop]
//         return `property doesn't exist in target object`
//     },
//     set(target, prop, value){
//         if(!prop in target) throw new Error("property doesn't exist in target object")
//         switch(prop){
//             case "name":
//             case "city":
//                 if(typeof value != "string")
//                     throw new Error ("value must be of string type")
//                 break
//             case "age":
//                 if(typeof value != "number")
//                     throw new Error ("value must be a number")
//                 if(value<0)
//                     throw new Error("age must be greater than 0")
//         }
//         Reflect.set(target, prop, value)
//     }
// })
// proxyObj.name = "Rajat"
// console.log(proxyObj);
// console.log(obj);

let userDetails = {
    name: "Ishan",
    age: 25,
    password: "1234",
};
userDetails = new Proxy(userDetails, {
    get(target, prop) {
        if (prop in target) {
            if(prop=="password")
                return "chal hatt"
            else
                return target[prop]
        }
    },
});
console.log(userDetails["age"]);
