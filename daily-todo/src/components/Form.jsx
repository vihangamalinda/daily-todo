import React from "react";

const Form = (props) => {
  const { setInputText, inputText, setTodos ,todos,setStatus} = props;

  const getInput = (e) => {
    //console.log(e.target.value);
    setInputText(e.target.value);
  };

  const statusChange = (e) =>{
    // console.log(e.target.value)
    setStatus(e.target.value);
  }

  const submitForm = (e) =>{
    e.preventDefault();
    setTodos([...todos,{
      text:inputText,
      completed: false,
      id: Math.random()*10000
    }]);
    setInputText("");
    // console.log(todos);
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="input-group mb-2 ">
            <span className="input-group-text">Task</span>
            <input
              type="text"
              id="task"
              onChange={getInput}
              className="form-control"
              value={inputText}
            />
          </div>
        </div>
        <div className="col-1 ps-0">
          <div className="btn bg-light justify-content-center" onClick={submitForm}>
            <span className="material-symbols-outlined">add_circle</span>
          </div>
        </div>
        <div className="col-3">
          <select className="form-select" aria-label="status"  onChange={statusChange}>
            <option defaultValue="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Form;
