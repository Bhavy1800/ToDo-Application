import { useState } from 'react';
import './App.css'
import { CreateTodo } from "./components/CreateToDo";
import { Todos } from './components/Todos';

function App() {
  const [todos,setTodos]=useState([]);

// wrong way
// fetch("http://localhost:3000/todos").then(async function(res){
//   const json = await res.json();
//   setTodos(json.todos);
// })


  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={[todos]} />
    </div>
  );
}

export default App;