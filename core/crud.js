console.log("[CRUD]");


const fs = require("fs");
const DB_FILE_PATH = "./core/db";

function create(content){
    // precisa salvar o content no sistema
    fs.writeFileSync(DB_FILE_PATH, content);
    return content;
}

//simulation 

console.log(create("hoje eu preciso gravhvjhar aulas!"));