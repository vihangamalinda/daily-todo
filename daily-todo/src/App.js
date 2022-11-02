import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // Global state management
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

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
            />
          </div>
          <div className="col-12">
            <TodoList  todos={todos} setTodos={setTodos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
