import header from "./header/script.js";

let pugTemplate = require("./index.pug");
document.querySelector("#pugTemplate").innerHTML = pugTemplate;

console.log("Javascript entry point log");