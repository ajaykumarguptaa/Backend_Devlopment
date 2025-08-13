//! global onject is the object no need to import before use like `console` and `setTimeout` etc.

// setTimeout(()=>{
//     console.log("hello how are you")
// },2000)


// let count =0;

// const interval=setInterval(()=>{
//      console.log(`Interval Count: ${++count}`)
//      if (count==4){
//       clearInterval(interval)
//      }
// },1000)

// console.log(global)
// console.log(Object.getOwnPropertyNames(global))


// process.env.UV_THREADPOOL_SIZE = 6;
import fs from 'fs'
import crypto from 'crypto'



// setTimeout(()=>{console.log("come from setTimeout")},0)
// setImmediate(()=>{console.log("hello from immidiate one ")},0)
// console.log("hello world 1")

//? increase Thread size 



// crypto-graphy [cpu intensive task]
let start=Date.now();
crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",()=>{
  console.log(`${Date.now() - start}ms Done`)
})

crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",()=>{
  console.log(`${Date.now() - start}ms Done`)
})

crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",()=>{
  console.log(`${Date.now() - start}ms Done`)
})

crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",()=>{
  console.log(`${Date.now() - start}ms Done`)
})

crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",()=>{
  console.log(`${Date.now() - start}ms Done`)
})

// crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",()=>{
//   console.log(`${Date.now() - start}ms Done`)
// })

