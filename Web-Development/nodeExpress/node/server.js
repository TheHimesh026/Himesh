const http = require('http');
const fs = require("fs");

const homePage = fs.readFileSync("./content/index.html");
const homeScript = fs.readFileSync("./content/scripts.js");
const homeStyles = fs.readFileSync("./content/styles.css");
const homeIcon = fs.readFileSync("./content/tasks.png");

const server = http.createServer((req,res) => {
  switch(req.url){
    case "/":
      res.writeHead(200,{"content-type":"text/html"});
      res.write(homePage);
      res.end();
      break;
    case "/styles.css":
      res.writeHead(200,{"content-type":"text/css"});
      res.write(homeStyles);
      res.end();
      break;
    case "/scripts.js":
      res.writeHead(200,{"content-type":"text/javascript"});
      res.write(homeScript);
      res.end();
      break;
    case "/tasks.png":
      res.writeHead(200,{"content-type":"image/png"});
      res.write(homeIcon);
      res.end();
      break;
    case "/about":
      res.write("I'm here in about");
      break;
    case "/send":
      res.write("Task Added");
      res.end();
      break;
    default:
      res.write("Well I'm here to guide you");
      break;
  }
});

// const server = http.createServer((req,res) => {
//   // const file = fs.readFileSync("./content/text2.txt",'utf8');
//   // res.end(file);
//   const file = fs.createReadStream("./content/text1.txt",'utf8');
//   file.on("data",(result) => {
//     res.write(result)
//   });
//   file.on("open",() => {
//     file.pipe(res);
//   });
// });

const PORT = 5173;
 server.listen(PORT,() => {
  console.log(`Server started at ${PORT}...`);
});