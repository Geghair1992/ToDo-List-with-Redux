import './App.css';
import React from 'react'
import TodoInput from './components/todoInput/todoInput';
import Todos from './components/todos.js/todos';




function App() {
  return (
      <div className="App">
         <TodoInput/>
         <Todos/>         
      </div>   
  );
}

export default App;
