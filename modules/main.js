import baseInfo from "./baseInfo/script.js";
import contact from "./contact/script.js";
import education from "./education/script.js";

import experience from "./experience/script.js";
import profile from "./profile/script.js";
import skills from "./skills/script.js";
import software from "./software/script.js";contact

import baseStyle from "./base.less"

let pugTemplate = require("./index.pug");
document.querySelector("#pugTemplate").innerHTML = pugTemplate;

console.log("Javascript entry point log");