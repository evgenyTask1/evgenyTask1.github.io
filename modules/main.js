import baseInfo from "./baseInfo/script.js";
import contact from "./contact/script.js";
import education from "./education/script.js";

import experience from "./experience/script.js";
import profile from "./profile/script.js";
import skills from "./skills/script.js";
import software from "./software/script.js";

import root from "./root/script.js"
import media from "./projectShare/media.less"

let req;
try {
    req = require.context("./projectShare", true, /\.(?:eot|svg|ttf|woff)$/im);
    req.keys().forEach((key) => req(key)); 
} catch(ex) {} 




let pugTemplate = require("./root/index.pug");
document.querySelector("#pugTemplate").innerHTML = pugTemplate;

console.log("Javascript entry point log");