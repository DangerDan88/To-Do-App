import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import Form from "./components/Form";
import ListItem from "./components/ListItem";
function App() {
  const [toDos, setToDos] = useState("");
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
      Welcome to my To Do App
      <div>
        <form onSubmit={HandleFormSubmit}>
          <label>
            ToDoItem:
            <input
              type="toDos"
              name="toDos"
              onChang={handleInputChange}
              value={toDos}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
