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
    getStorageTodos();
  },[])

  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
    console.log("called filter Handler")
  },[todos,status])

  const saveLocalTodos = () =>{
    if(todos.length>0){
      localStorage.setItem("todos",JSON.stringify(todos));
    }
    
  }

  const getStorageTodos = () =>{
    if(localStorage.getItem("todos") === null){
      localStorage.getItem("todos",JSON.stringify([]));
    }else {
     let localTodos = JSON.parse(localStorage.getItem("todos"));
     setTodos(localTodos);
    console.log(localTodos);
    }
  }


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
    <div className="container pt-5">
      <div className="row justify-content-center ">
        <div className="fs-2 justify-content-center row"> Daily Todos ......</div>
       
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
