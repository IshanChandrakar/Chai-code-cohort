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

const arr = [1,2,3,4,5]
function negativeIndex(arr){
    return new Proxy(arr,{
        get(target, prop){
            const index = Number(prop)
            if(index<0)
                return target[target.length + index]
            return target[index]
        },
        set(target, prop, value){
            const index = Number(prop)
            if(index<0)
                target[target.length + index] = value
            else
                target[index] = value
            return true
        }
    })
}
const proxyArray = negativeIndex(arr)
proxyArray[-2] = 100
console.log(arr);
console.log(proxyArray);

