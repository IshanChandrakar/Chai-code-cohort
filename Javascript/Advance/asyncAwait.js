const fsPromise = require("fs/promises")

function wait(seconds){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve()
        },seconds*1000)
    })
}

async function readContent(){
    const content = await fsPromise.readFile("Javascript/Advance/hello.txt","utf-8")
    await fsPromise.writeFile("Javascript/Advance/duplicate.txt", content)
    // wait 10 seconds before deleting hello.txt
    await wait(10)
    await fsPromise.unlink("Javascript/Advance/hello.txt")
    console.log(content)
}
readContent()