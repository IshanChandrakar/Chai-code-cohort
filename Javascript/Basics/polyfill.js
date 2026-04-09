const arr = [1,2,3,4,5,6]

// Array.prototype.myForEach = function(userFn){
//     let originalArray = this
//     for(let i=0; i<originalArray.length; i++){
//         userFn(originalArray[i], i)
//     }
// }

// arr.myForEach(function (element, index){
//     console.log(`${index} : ${element}`);   
// });

// Array.prototype.myMap = function(userFn){
//     const newArray = []
//     for(let i=0;i<this.length; i++){
//         newArray.push(userFn(this[i]))
//     }
//     return newArray
// }
// const newMapArray = arr.myMap(function(element){
//     return element*10
// })
// console.log(newMapArray);

Array.prototype.myFilter = function(userFn){
    let myFilterArray = []
    for(let i=0; i<this.length; i++){
        if(userFn(this[i]))
            myFilterArray.push(this[i])
    }
    return myFilterArray
}

const filterArray = arr.myFilter((element)=>{
    if(element%3==0)
        return element
})
console.log(filterArray);
