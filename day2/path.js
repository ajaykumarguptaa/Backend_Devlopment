//! Path module.....
  import path, { resolve } from 'path'
import { fileURLToPath } from 'url'

// Construct __filename and __dirname
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// console.log("fileName:", __filename)
// console.log("dirName:", __dirname)

//? Example making a school management project 
//? folder/student/data.txt need this...


//* path.join()

// const filepath=path.join("folfer","student","data.txt")
// console.log(filepath)

//* path.resolve() give current filename

// const parseDatapath=path.parse(filepath)
// const resolvePath =path.resolve(filepath)
// const extname=path.extname(filepath)
// const basename=path.basename(filepath)
// const dirName=path.dirname(filepath)

// console.log({
//   parseDatapath,
//     resolvePath,
//     extname,
//     basename,
//     dirName
// })

//! output 

// {
//   parseDatapath: {
//     root: '',
//     dir: 'folfer\\student',
//     base: 'data.txt',
//     ext: '.txt',
//     name: 'data'
//   },
//   resolvePath: 'C:\\Users\\thein\\OneDrive\\Desktop\\BACKEND NODE\\folfer\\student\\data.txt',
//   extname: '.txt',
//   basename: 'data.txt',
//   dirName: 'folfer\\student'
// }


//TODO: EVENT 📁 
// ? by performing short of action

import { EventEmitter } from 'events';

const emitter = new EventEmitter();

//? they have two key method 
//1. on(take event name)--- create custom event
 emitter.on("GREET",()=>{
  console.log("Hello world 1 !!")
 })

//2. emit( take the name if event)--- execute event
//* GREET is the event name

emitter.emit("GREET")

//!--------------------------------------------
//1. on(take event name)--- create custom event
 emitter.on("GREET2",(username,id)=>{
  console.log(`Hello world 2 !! ${username} and the id is ${id}`)
 })

//2. emit( take the name if event)--- execute event
//* GREET is the event name

emitter.emit("GREET2","ajay","hsdhfu34ukj3232rhj2k4nrk")

//!----------------------------------------------- correct method to use this not pass single single args vale create a object and send it.

emitter.on("GREET3",(args)=>{
  console.log(`hello world neme is 3 Name:${args.Name} Age:${args.age} and Uid:${args.UiD}`)
})

emitter.emit("GREET3",{
  Name:"Ajay kumar gupta",
  age:"21",
  UiD:"hsdhfu34ukj3232rhj2k4nrk"
})

//TODO:  Assignment.......

// !OBJECTIVE
// * CREATE A PROGRAM USING NODE-JS EVENTEMITTER THAT:

// ? LISTENS FOR MULTIPLE TYPES OF USER EVENTS (E.G LOGIN , LOGOUT , PURCHASE , AND PROFILE UPDATE)
// ? TRACKS HOW MANY TIMES EACH EVENT IS EMITTED.
// ? LOGS A SUMMARY OF ALL EVENTS OCCURRENCES WHEN A SPECIAL SUMMARY EVENT IS TRIGGERED

// !REQUIREMENT

// ? create at least four custom events
// ? emit these events multiple times with different arguments ( e.g username , item purchased)
// ? tracks and store the count of each event type.
// ? define a summary events that logs a detailed report of how many times each event was triggered

// -----------------------in Assignment js-------------------------------------
