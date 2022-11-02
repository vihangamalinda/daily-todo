import React from "react";

const Todo = (props) => {
const {setTodos,todos,todo}=props;
    //Change the value of Completed property to opposite
  const taskOperation = () => {
    setTodos(todos.map((item)=>{
        if(item.id === todo.id){
            return {
                ...item,
                completed: !item.completed,
            }
        }
        return item;
    }));
    
    console.log(todos);
  };

  const deleteOperation = ()=>{
    console.log(todo);
    setTodos(todos.filter((item)=> item.id !== todo.id));
  }

  return (
    <div className={`bg-light container   my-1 border ${todo.completed === true ? "text-decoration-line-through" :'fw-bold'}`}>
       <div className="row">
      <div className="col-8">
        <div className="py-2 text-truncate ">{todo.text}</div>
      </div>
      <div className="col-4 bg-dark ">
        <div className="row bg-light  justify-content-end">
        <div className="col-4 ">
        <button className="btn btn-success ">
          <span onClick={taskOperation} className="material-symbols-outlined">check_circle</span>
        </button>
      </div>
      <div className="col-4 ">
        <button onClick={deleteOperation} className="btn btn-danger ">
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
        </div>
      
      </div>
      
      </div>
      </div>
  
  );
};

export default Todo;
