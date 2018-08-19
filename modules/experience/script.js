let req;
try {
    req = require.context("./img", true, /\.(?:png|jpe?g|gif|tiff)$/im);
    req.keys().forEach((key) => req(key)); 
} catch(ex) {} // no img in this module

import style from "./style.less"
