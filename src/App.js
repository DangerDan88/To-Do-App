import React, { useState, useEffect, Fragment } from "react";
import "./index.css";
import Form from "./components/Form";
import ListItem from "./components/ListItem";

// This is my initial monthly tasks
const tasks = [
  { name: "Code 1 hour everyday", done: false },
  { name: "100 percent on diet", done: false },
  { name: "listen to 3 syntax podcasts a week", done: false }
];

function ToDoApp() {
  // setting up state here for todos and the inputs and values for todo's
  const [todos, settodos] = useState(tasks);
  const [inputValue, setInputValue] = useState("");

  // this works essentially the same as componentDidMount or componentDidUpdate
  useEffect(() => {
    let count = 0;
    todos.map(todo => (todo.done ? count++ : null));
    document.title = `${count} task${count > 1 ? "s" : ""} todo`;
  });
  // function for handling the submit of the form
  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue === "") return alert("To do list item requires name:");
    // sets a new array with the start at a default index of [0]
    const newArr = todos.slice();
    // splice then takes new array we sliced and adds the tasks off inputValue
    newArr.splice(0, 0, { name: inputValue, done: false });
    settodos(newArr);
    setInputValue("");
  };
  // function to handle to button submit of form to make new array and set the todo's to the state
  const handleButtonClick = ({ type, index }) => {
    const newArr = todos.slice();
    if (type === "remove") newArr.splice(index, 1);
    else if (type === "completed") newArr[index].done = true;

    return settodos(newArr);
  };

  return (
    // Fragment lets you group a list of children without adding extra nodes to the DOM
    <Fragment>
      <h1>Daniel's Weekly ToDo list to be Successful</h1>
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
