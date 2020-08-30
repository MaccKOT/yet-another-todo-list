import React, { useState, useEffect } from 'react';
import './App.css';
//import components
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //State stuff
  const [inputText, setInputText] = useState('');
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //mockup todos data
  let mockup = [
    {
      text: 'Get a breakfast',
      completed: false,
      id: 1,
    },
    {
      text: 'Get a coffee',
      completed: false,
      id: 2,
    },
    {
      text: 'Program a great app',
      completed: false,
      id: 3,
    },
    {
      text: 'Take over the world.',
      completed: true,
      id: 4,
    },
  ];
  //get todos from local storage
  if (localStorage.getItem('todos') !== null) {
    mockup = JSON.parse(localStorage.getItem('todos'));
  }
  const [todos, setTodos] = useState(mockup);

  //events
  useEffect(() => {
    //event function
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
    //save to local storage
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [status, todos]);

  return (
    <div>
      <Header />
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
