const os = require("os");

const machine = os.machine();
const freemem = os.freemem();
const release = os.release();
const userInfo = os.userInfo();

// console.log("os info:" machine,freemem,release,userInfo)