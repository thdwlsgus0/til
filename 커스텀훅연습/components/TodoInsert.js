import React, {useState, useEffect} from 'react';
import { MdAddCircle } from 'react-icons/md';
import './TodoInsert.css';
const TodoInsert = ({onInsertToggle, onInsertTodo, onSelectedTodo}) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue('');
    onInsertToggle();
  }

  return (
  <div>
    <div className="background" onClick={onInsertToggle}></div>
    <form onSubmit={onSubmit}>
      <input placeholder="please type" value={onSelectedTodo} onChange={onChange}></input> 
      <button type="submit">
        <MdAddCircle/>
      </button>
    </form>
  </div>
  )

}

export default TodoInsert;