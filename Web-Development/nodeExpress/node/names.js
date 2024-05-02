const name = ["Hello","bye"];
const person = {
  name:"Hello",
  age:"25"
};

module.exports.info = "Hello"; //why its not being consoled because its getting overwritten
module.exports = { name,person };