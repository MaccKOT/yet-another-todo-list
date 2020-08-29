import React, { useState } from 'react';
import './App.css';
//import components
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');

  return (
    <div>
      <Header />
      <Form setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
