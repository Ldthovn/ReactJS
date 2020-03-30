import React from "react";
import "./App.scss";
import TodoItem from "./components/TodoItem";

const App = props => {
  const todoItems = [
    { title: "Le Dinh Tho", isComplete: true },
    { title: "Le Thi Hai Luong", isComplete: true },
    { title: "Le Thi Hien" }
  ];

  return (
    <div className="App">
      {todoItems.length > 0 &&
        todoItems.map((item, index) => <TodoItem key={index} item={item} />)}
      {todoItems.length === 0 && "Nothing here"}
    </div>
  );
};

export default App;
