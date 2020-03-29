import React from "react";

const TodoItem = props => {
  return (
    <div className="TodoItem">
      <p>{props.title}</p>
    </div>
  );
};

export default TodoItem;
