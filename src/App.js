import React, { useState } from 'react';
import './App.css';
//import components
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');

  //mockup todos data
  const mockup = [
    {
      text: 'Get a breakfast',
      completed: false,
      id: 1,
    },
    {
      text: 'Get a coffe',
      completed: false,
      id: 2,
    },
    {
      text: 'Program a great app',
      completed: false,
      id: 3,
    },
  ];

  const [todos, setTodos] = useState(mockup);

  return (
    <div>
      <Header />
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
