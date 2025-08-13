import { Readable,Writable } from "stream";

const readableStream = new Readable({
  highWaterMark: 6,
  read() {},
});

const writableStream=new Writable({
  write(streamData){
    console.log("write........",streamData)
  }
})

readableStream.on("data", (chunk) => {
  console.log("chunk", chunk.toString());
  writableStream.write(chunk)
});



console.log(readableStream.pause("hello world!"));
