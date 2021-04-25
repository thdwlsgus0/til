import React from 'react';
import TodoItem from './TodoItem';
const TodoList = ({todos}) => {
  return (
   <div>
     {todos.map(todo=> (
          <TodoItem todo={todo} key={todo.id}>
          </TodoItem>
      ))}
  </div>
  );
}

export default TodoList;