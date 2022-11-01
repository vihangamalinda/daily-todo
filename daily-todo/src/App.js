import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
// Global state management
const [inputText,setInputText] = useState("");
const [todos,setTodos] = useState([{}]);

  return (
    <div className="container ">
      <div className='row justify-content-center'>
     
       Daily Todos ......
      
      <div className="">
        <Form setInputText={setInputText} inputText={inputText} setTodos={setTodos} todos={todos} />
        <TodoList/>
      </div>
        
      </div>

    


      
    </div>
  );
}

export default App;
