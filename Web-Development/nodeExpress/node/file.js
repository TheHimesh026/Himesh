const File = require('fs');
const { createReadStream } = require("fs");

//sync functions
const readFileSync = File.readFileSync("./content/text1.txt","utf8");
const writeFileSync1 = File.writeFileSync("./content/text1.txt","Hello Boys I m here in text 1 file",{flag:'a'});
const writeFileSync2 = File.writeFileSync("./content/text2.txt","Hello Boys I m here in text 2 file");

console.log("Read File:",readFileSync);

//async functions
//using callback hell
 File.readFile('./content/text1.txt','utf8', (error,data) => {
  if(error){
    console.log("error:",error);
    return;
  };
  console.log("Data1:",data);
  File.readFile('./content/text2.txt','utf8',(error,data) => {
    if(error){
    console.log("error:",error);
    return;
  };
  console.log("Data2:",data);
  })
});

//using promises

const getText = (path) => {
  return new Promise((resolve,reject) => {
    File.readFile(path,'utf8',(error,data) => {
      if(error){
        return reject(error);
      } else {
        return resolve(data);
      }
    })
  })
};

getText("./content/text1.txt")
 .then(data => console.log("async data:",data))
 .catch(err => console.warn("async error",err))
 
 const start = async () => {
   const readText = await getText("./content/text1.txt");
  await File.promises.writeFile('./content/text1.txt',"Hello im writing using async and await");
 };
 
 start();
 
 const stream = createReadStream("./content/text1.txt",{encoding:'utf8'});
 
 stream.on("data",(result) => {
   console.log(result);
 })