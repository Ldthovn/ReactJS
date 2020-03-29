import React from "react";
import "./TodoItem.css";

const TodoItem = props => {
  const { item } = props;
  let className = "TodoItem";
  if (item.isComplete) {
    className += " TodoItem-complete";
  }
  return (
    <div className={className}>
      <p>{props.item.title}</p>
    </div>
  );
};

export default TodoItem;
