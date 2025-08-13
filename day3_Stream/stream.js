import fs from "fs";
import http from "http";

// fs.writeFile("sample.txt","hello world !! ",(err)=>{
//   console.log('Error:',err)
// })
const data = fs.readFileSync("sample.txt", "utf-8");
//?--------------------------1------------

const server = http.createServer((req, res) => {
  // res.end(data);

  //*--Downloading file in good way (stream)----------readablle stream
  // const readableStream = fs.createReadStream("sample.txt"); // creating pipe line
  // readableStream.pipe(res);
  // res.end()

  //?-------------2-----------
  //! bad way
  // const file=fs.readFileSync('sample.txt')
  // fs.writeFileSync("output.txt",file)
  // res.end()

  //! good way to copy file
  const readStream = fs.createReadStream("sample.txt");
  const writestream = fs.WriteStream("output.txt");

  readStream.on("data", (chunk) => {
    console.log("CHUNK: ", chunk);
    writestream.write(chunk);
  });
});

//TODO: CREATING Custom Stream................................................................
  customStream.js


server.listen(8082, () => {
  console.log(` http://localhost:${8082}`);
});
