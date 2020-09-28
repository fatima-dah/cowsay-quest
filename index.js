const myInformation = require(`./information.js`);

let cowsay = require("cowsay");

console.log(cowsay.say({
    text :`hello I'm ${myInformation.name}  from ${myInformation.campus} Campus!`,
    e : "oO",
    T : "U "
})); 
