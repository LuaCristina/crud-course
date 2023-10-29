import fs from "fs"; //ES6
import { v4 as uuidv4} from 'uuid';

const DB_FILE_PATH = "./core/db";

console.log("[CRUD]");

interface Todo {
    id: string,
  date: string;
  content: string;
  done: boolean;
}

// cria o objeto e suas respectoivas características
function create(content: string): Todo {
  const todo: Todo = {
    id: uuidv4(),
    date: new Date().toISOString(),
    content: content,
    done: false,
  };

  const todos: Array<Todo> = [
    ...read(),
    todo,
  ];





  // salvar o content no sistema
  fs.writeFileSync(DB_FILE_PATH, JSON.stringify({
    todos,
  }, null, 2));
  return todo;
}

function atualizar(id: string, partialTodo: Partial<Todo>){
    const todos = read();
    todos.forEach((currentTodo) => {
        const isToUpdate = currentTodo.id === id;
        if(isToUpdate){
            Object.assign(currentTodo, partialTodo)
        }
    })
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify({
        todos,
    }, null, 4));
    console.log("todos atualizados", partialTodo)
}


 
function read(): Array<Todo> {
  const dbString = fs.readFileSync(DB_FILE_PATH, "utf-8");
  const db = JSON.parse(dbString || "{}");
  if(!db.todos) { // Fail Fast Validations
    return [];
  }

  return db.todos;
}

function CLEAR_DB() {
  fs.writeFileSync(DB_FILE_PATH, "");
}

CLEAR_DB()
create("Primeira TODO")
create("Segunda TODO")
const terceiraTodo = create("Terceira TODO");
atualizar(terceiraTodo.id, {
    content: "aloaloalo",
});
console.log(read());


