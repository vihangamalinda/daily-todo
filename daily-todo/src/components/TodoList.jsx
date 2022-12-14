import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  const {todos,setTodos,filteredTodos} = props;
  return (
    <div className='row justify-content-center my-3'>
      <div className='col-7'>
        {filteredTodos.map((todo)=>{
         return (<Todo 
          todos={todos}
          setTodos={setTodos}
          key={todo.id}
          todo={todo}
          />)
        })}
      
      

      </div>
      
      </div>
  )
}

export default TodoList