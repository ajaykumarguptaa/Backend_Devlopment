import os from 'os';
console.log(os.platform)

// file read in javaScript
import fs from 'fs'

// fs.readFile("smple.txt",'utf8',(error,data)=>{
//   if(error){
//     console.error('Error reading file',+error)
//     return
//   }
//   console.log('file content: '+data);
// })

// console.log('Reading file....(this is run first)')



// fs.writeFile("same.txt","hello",()=>{
//   console.log('how are you name is ajay kumar gupta')
// })

fs.appendFile("same.txt","may name name is ajay kumar gupta",()=>{
 console.log("name is ajay kuamr gupta")
})