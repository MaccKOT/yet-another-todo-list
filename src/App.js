import React, { useState } from 'react';
import './App.css';
//import components
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

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
