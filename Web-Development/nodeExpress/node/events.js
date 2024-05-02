const events = require("events");

const customEmitters = new events();

customEmitters.on("response",(para) => {
  console.log(`Hello ${para}!!`);
});

customEmitters.emit("response","Boys");