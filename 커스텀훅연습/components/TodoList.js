import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';
const TodoList = ({todos, onCheckToggle}) => {
  return (
   <div className="TodoList">
     {todos.map(todo=> (
          <TodoItem todo={todo} key={todo.id} onCheckToggle={onCheckToggle}>
          </TodoItem>
      ))}
  </div>
  );
}

export default TodoList;