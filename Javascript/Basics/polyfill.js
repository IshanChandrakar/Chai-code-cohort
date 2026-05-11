// const arr = [1,2,3,4,5,6]

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

// Array.prototype.myFilter = function(userFn){
//     let myFilterArray = []
//     for(let i=0; i<this.length; i++){
//         if(userFn(this[i]))
//             myFilterArray.push(this[i])
//     }
//     return myFilterArray
// }

// const filterArray = arr.myFilter((element)=>{
//     if(element%3==0)
//         return element
// })
// console.log(filterArray);

// Array.prototype.myForEach = function(userFn){
    //     for(let i=0; i<this.length; i++){
        //         userFn(this[i], i)
//     }
// }
// arr.myForEach((element, index)=>{
    //     console.log(`element at index ${index} is ${element}`)
    // })
    
    // Array.prototype.myMap = function(userFn){
        //     let newArr = []
        //     for(let i=0; i<this.length; i++){
            //         newArr.push(userFn(this[i]))
            //     }
            //     return newArr
            // }
// const doubledArr = arr.myMap((element)=>element*2)
// console.log(doubledArr);

const arr = [1,2,3,4,5]
Array.prototype.myReduce = function(userFn){
    let result = 0
    for(let i=0; i<this.length; i++){
        result = userFn(result, this[i])
    }
    return result
}

const reducedArr = arr.myReduce((abTakKiValue, current)=> abTakKiValue + current)
console.log(reducedArr);
