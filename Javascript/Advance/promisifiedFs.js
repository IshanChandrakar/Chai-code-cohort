const fs = require("fs")

function promisifiedReadFile(filepath, encoding){
    return new Promise((resolve, reject)=>{
        fs.readFile(filepath, encoding, (err, data)=>{
            if(err)
                reject(err)
            else
                resolve(data)
        })

    })
}
function promisifiedWriteFile(filepath, content){
    return new Promise((resolve, reject)=>{
        fs.writeFile("Javascript/Advance/backup.txt", content, (err)=>{
            resolve(content)
        })
    })
}
function promisifiedDeleteFile(filepath){
    return new Promise((resolve,reject)=>{
        fs.unlink(filepath, (err)=>{
            resolve()
        })
    })
}
const fsv2 = promisifiedReadFile("Javascript/Advance/hello.txt", "utf-8")
fsv2
    .then((data)=>promisifiedWriteFile("Javascript/Advance/backup.txt",data))
    .then(()=>promisifiedDeleteFile("Javascript/Advance/hello.txt"))
    .catch((err)=>console.log(err))