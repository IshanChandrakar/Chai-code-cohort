let promisifiedSetTimeout = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("promise fulfilled")
    },2000)
})
promisifiedSetTimeout
    .then((value)=>{
        console.log(value)
    })
console.log("program started, please wait")