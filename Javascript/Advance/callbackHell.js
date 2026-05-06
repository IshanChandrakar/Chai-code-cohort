const fs = require("fs");
const fsv2 = require("fs/promises")

console.log("starting of program");

// promisified version of fs
fsv2
    .readFile("Javascript/Advance/hello.txt","utf-8")
    .then((content)=>fsv2.writeFile("Javascript/Advance/backup.txt", content))
    .then(()=> fsv2.unlink("Javascript/Advance/hello.txt"))
    .catch((e)=>console.log("error occurred"))

// callback hell
// fs.readFile("Javascript/Advance/hello.txt", "utf-8", function (err, data) {
//     if (err) console.log("error reading data");
//     else {
//         fs.writeFile("Javascript/Advance/backup.txt", data, function (err) {
//             if (err) {
//                 console.log("error in copying the content");
//             } else {
//                 fs.unlink("Javascript/Advance/hello.txt", function (e) {
//                     if (e) console.log("error in deleting the file");
//                     else console.log("file deleted successfully");
//                 });
//             }
//         });
//     }
// });

console.log("end of program");
