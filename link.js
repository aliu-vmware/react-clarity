const fs = require("fs");
const path = require("path");

const rawPath = process.argv[2];

if(!rawPath) {
    console.log("Usage: npm run link <path_to_project>");
    return;
}

const appPath = path.resolve(rawPath);
const nodeModules = path.join(appPath, "node_modules");
const reactClarity = path.join(nodeModules, "react-clarity");

try {
    fs.mkdirSync(nodeModules);
} catch (e) {
    if(e.code === "ENOENT") {
        console.log(`Couldn't find directory: ${nodeModules}!`);
        return -1;
    }
    if(e.code !== "EEXIST") {
        console.log(e);
        return -1;
    }
}

try {
    fs.mkdirSync(nodeModules);
} catch (e) {
    if(e.code === "ENOENT") {
        console.log(`Couldn't find directory: ${nodeModules}!`);
        return -1;
    }
    if(e.code !== "EEXIST") {
        console.log(e);
        return -1;
    }
}

try {
    fs.unlinkSync(reactClarity);
} catch (e) {
    if(e.code !== "ENOENT") {
        console.log(e);
        return -1;
    }
}


try {
    fs.symlinkSync(path.resolve(""), reactClarity);
} catch (e) {
    if(e.code !== "EEXIST")
        console.log(e);
}
