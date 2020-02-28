import React, { useState, useEffect, Fragment } from "react";
import "./index.css";
import Form from "./components/Form";
import ListItem from "./components/ListItem";
function ToDoApp() {
  const [todos, settodos] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let count = 0;
    todos.map(todo => (todo.done ? count++ : null));
    document.title = `${count} task${count > 1 ? "s" : ""} todo`;
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue === "") return alert("To do list item requires name:");

    const newArr = todos.slice();
    newArr.splice(0, 0, { name: inputValue, done: false });
    settodos(newArr);
    setInputValue("");
  };

  const handleButtonClick = ({ type, index }) => {
    const newArr = todos.slice();
    if (type === "remove") newArr.splice(index, 1);
    else if (type === "completed") newArr[index].done = true;

    return todos(newArr);
  };

  return (
    <Fragment>
    <Form
      onSubmit={handleSubmit}
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
    />
    <ul>
      {todos.map((todo, index) => (
        <ListItem
          key={index}
          todo={todo}
          remove={() => handleButtonClick({ type: "remove", index })}
          completed={() => handleButtonClick({ type: "completed", index })}
        />
      ))}
    </ul>
  </Fragment>
  );
}

export default ToDoApp;
