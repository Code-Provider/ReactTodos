import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Todo from "./todo.js" ; 
import { v4 as uuidv4 } from 'uuid';


const KEY = "key" ;

function App() {
  const [todos, settodos] = useState([]);
  const todovalue = useRef();

  useEffect(()=>{const storedtodos = JSON.parse(localStorage.getItem(KEY)) ; 
  if (storedtodos)
    settodos(storedtodos) ; 
}, 
    []) ; 

    useEffect(()=> {localStorage.setItem(KEY,JSON.stringify(todos));}
    , [todos]) ; 


function HandleAdd(e) {
  const name = todovalue.current.value ; 
  if (name === "") 
    return
  else {
    settodos([...todos, {id : uuidv4(), name : name, complete : false}]) ; 
    todovalue.current.value = null ;
    return ; 
  }
}

function toggleTodo(id) {
  const newtodos = [...todos] ;
  const todo = newtodos.find(todo => todo.id === id) ; 
  todo.complete = !todo.complete ; 
  settodos(newtodos) ; 
}

function clearAll(){
  settodos([]) ; 
  return ; 
}

function clearCompleted(){
  settodos(todos.filter((todo)=> !todo.complete)) ; 
  return ; 
}



  return (
    <div className="App Todo">
      <p id = "title">Add a Todo</p>
      <input type = "text" ref = {todovalue}></input>
      <div className = "box">
        <div className = "boxheader">
          <button onClick = {HandleAdd}>Add</button><button onClick = {clearCompleted}>Clear Completed</button><button onClick = {clearAll}>Clear All</button>
          </div>
            {todos.map((todo) => {return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo}/>} )}
        
          </div>

          <p id = "lefttodo">{todos.filter((todo)=> !todo.complete).length} Left to do</p>
    </div>
  );
}

export default App;
