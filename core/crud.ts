import fs from "fs"; //ES6

// const fs = require("fs");   -CommonJS

console.log("[CRUD]");

const DB_FILE_PATH = "./core/db";

function create(content: string){
    // precisa salvar o content no sistema
    fs.writeFileSync(DB_FILE_PATH, content);
    return content;
}


//simulation 
console.log(create("jhakjlkas"));