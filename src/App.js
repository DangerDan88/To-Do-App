import React from "react";
import "./App.css";
import useToDosList from "./useToDoList";

function App() {
  const { toDos, handleInputChange, HandleFormSubmit } = useToDosList();
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
