import { useState, useRef } from "react";
import TodoList from "./components/TodoList.js";
import { v4 as uuidv4 } from 'uuid';
import "./App.css"

function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => [
      ...prevTodos, 
      { id: uuidv4(), name: name, completed: false },
    ]);
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  return (
    <>
      <h1>ToDo List</h1>
      <input 
        type="text" 
        ref={todoNameRef} 
        placeholder="新しいTodoを追加"
      />
      <button onClick={handleAddTodo}>＋</button>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      
      <div>残りのタスク: {todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
}

export default App;
