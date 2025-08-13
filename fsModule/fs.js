// ! file module
import fs from "fs";
import os from "os"

//*write
// TODO: asyncronouds code
// fs.writeFile("./Files/write.txt","hello how are you...",(err)=>{
//   console.log("Error: ",err.message)
// })

//? syncronous code....
// fs.writeFile("./Files/swrite.txt","my name is ajay kumar gupta")

//*read
// fs.readFile("./write.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log("File content:", data);
// });

//*update
// fs.appendFileSync("./write.txt",`hello how hare you...!${new Date().toDateString()}`);

console.log(os.cpus().length)

//*delete
