import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  const todoItems = ["Le Dinh Tho", "Le Thi Hai Luong", "Le Thi Hien"];

  return (
    <div className="App">
      {todoItems.map((item, index) => (
        <TodoItem key={index} title={item} />
      ))}
    </div>
  );
}

export default App;
