// const obj1 = {name:"ishan"}
// const obj2 = {name:"rajat"}

// let arr = [obj1, obj2]

// console.log(arr);

// const obj = {
//     "0": "ishan",
//     "1": "chandrakar"
// }
// console.log(obj[1]);

// const arr = [1,2,3,4,5]

// const reverseArr = []

// for(let i=arr.length-1; i>=0; i--)
//     reverseArr.push(arr[i])
// console.log(reverseArr);

// console.log(Math.max(...arr));

// removing nesting condition
// const arr = [1,[2,[3,[4,5],6],7],8,[9,[10,[11,[12,[13,14],15],16],17],18],19]
// let result = []
// function removeNesting(arr){
//     for(let i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             removeNesting(arr[i])
//         }
//         else{
//             result.push(arr[i])
//         }
//     }
// }
// removeNesting(arr)
// console.log(result);

// remove duplicates
// const arr = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]
// let uniqueArr = []

// for(let i=0; i<arr.length; i++){
//     if(!uniqueArr.includes(arr[i]))
//         uniqueArr.push(arr[i])
// }
// console.log(uniqueArr);

// map manually
// const arr = [1,2,3,4,5]
// const mapped = []

// for(let i=0; i<arr.length; i++)
//     mapped.push(arr[i]*2)
// console.log(mapped);

// filter manually
// const arr = [1,2,3,4,5,6,7,8,9,10]
// const filterArr = []

// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2==0)
//         filterArr.push(arr[i])
// }
// console.log(filterArr);

// const arr = [1,2,3,4,5]
// let initialValue = 0

// const sum = arr.reduce((accumulator, currentValue)=>{
//     accumulator = accumulator + currentValue
//     return accumulator
// },initialValue)

// console.log(sum);

// find most active user using reduce
// let userActivity = [
//     {user : "Alice", activityCount : 45},
//     {user : "Bob", activityCount : 7},
//     {user : "Charlie", activityCount : 33}
// ]

// let maxActivityUser = userActivity.reduce((maxUser, user)=>{
//     maxUser = maxUser.activityCount > user.activityCount ? maxUser : user
//     return maxUser
// })
// console.log(maxActivityUser);

// category wise price with reduce function
let expenses = [
  { title: "Tea", amount: 10, type: "food" },
  { title: "Rice", amount: 50, type: "food" },
  { title: "Internet", amount: 100, type: "utility" }
]

const categoryExpense = expenses.reduce((acc, curr)=>{
    acc[curr.type] = (acc[curr.type] || 0) + curr.amount
    return acc
},{})
console.log(categoryExpense);
