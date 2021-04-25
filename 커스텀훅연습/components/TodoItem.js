import React from 'react';

const TodoItem = ({todo}) => {
  const {text} = todo;
  return <div>{text}</div>
}

export default TodoItem;