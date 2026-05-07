// const timedPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Task completed")
//     },2000)
// })
// timedPromise.then((data)=>console.log(data))
// console.log("start of program");

// reject promise
// const rejectedPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>reject("soemthing went wrong"),1000)
// })
// rejectedPromise.catch((err)=>console.log(err))

// const p = new Promise((resolve, reject) => {
//   console.log("Inside promise");
//   resolve("Done");
// });
// console.log("Outside");
// p.then(console.log);

// function getData(callback) {
//   setTimeout(() => {
//     callback("Data received");
//   }, 1000);
// }

// function getData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("data received")
//         },1000)
//     })
// }
// getData().then((data)=>console.log(data))

// const result = new Promise((resolve, reject)=>{
//     resolve(2)
// })
//  result
//     .then((value)=>value*3)
//     .then((value)=>{
//         value = value-1
//         console.log(value)
//     })

// Promise.resolve()
//   .then(() => {
//     throw new Error("Boom");
//   })
//   .then(() => {
//     console.log("Second then");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
// Promise.resolve(5)
//   .then((x) => {
//     return x * 2;
//   })
//   .then(console.log);

// console.log("Start");
// setTimeout(() => {
//   console.log("Timeout");
// }, 0);
// Promise.resolve().then(() => {
//   console.log("Promise");
// });
// console.log("End");

// setTimeout(() => console.log("A"), 0);
// Promise.resolve().then(() => console.log("B"));
// setTimeout(() => console.log("C"), 0);
// Promise.resolve().then(() => console.log("D"));
// console.log("E");

// setTimeout(() => {
//   console.log("Timer");
//   Promise.resolve().then(() => {
//     console.log("Inner Promise");
//   });
// }, 0);
// Promise.resolve().then(() => {
//   console.log("Outer Promise");
// });

// function delay(s){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(s)
//         },s*1000)
//     })
// }

// delay(1)
//     .then(()=>{
//         console.log("Task 1 done after 1 second")
//         return delay(2)
//     })
//     .then(()=>{
//         console.log("Task 2 done after 2 seconds")
//         return delay(3)

//     })
//     .then(()=>{
//         console.log("Task 3 done after 3 seconds")
//     })

// Promise.all([delay(1), delay(2), delay(3)]).then(()=>{
//     console.log("All tasks completed")
// })
// Promise.race([delay(1), delay(2), delay(3)]).then((data)=>{
//     console.log(data)
// })
// Promise.all([
//   Promise.resolve("A"),
//   Promise.reject("Error"),
//   Promise.resolve("C"),
// ])
//   .then(console.log)
//   .catch(console.log);

// Promise.allSettled([
//     Promise.resolve("A"),
//     Promise.reject("Error"),
//     Promise.resolve("C")
// ]).then(console.log)

// Promise.any([
//     Promise.reject("A"),
//     Promise.reject("Error"),
//     Promise.reject("C")
// ]).then(console.log)

function retry(promiseFn, attempts) {
    
}
function promiseFn() {
    return new Promise((resolve, reject) => {
        let random = Math.random();
        if (random > 0.5) resolve("resolved");
        else reject("rejected");
    });
}
retry(promiseFn, 5)
