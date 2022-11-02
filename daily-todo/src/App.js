import { useState,useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // Global state management
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect(()=>{
    filterHandler();
    console.log("called filter Handler")
  },[todos,status])


  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos( todos.filter((item) => item.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((item) => item.completed === false));
        break;
      default:
        setFilteredTodos(todos);
         break;
    }
  };
  
  

  return (
    <div className="container ">
      <div className="row justify-content-center">
        Daily Todos ......
        <div className="">
          <div className="col-12">
            <Form
              setInputText={setInputText}
              inputText={inputText}
              setTodos={setTodos}
              todos={todos}
              setStatus={setStatus}
            />
          </div>
          <div className="col-12">
            <TodoList 
            todos={todos} 
            setTodos={setTodos}
            filteredTodos={filteredTodos}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
