const fs = require("fs");
const path = require("path");

try {
    fs.mkdirSync("node_modules");
} catch (e) {
    if(e.code !== "EEXIST")
        console.log(e);
}

try {
    fs.symlinkSync("../..", path.join("node_modules", "react-clarity"));
} catch (e) {
    if(e.code !== "EEXIST")
        console.log(e);
}
