import React from "react";

export default function ListItem(props) {
  const [name, done] = props.toDo;
  return (
    <li style={{ textDecoration: done ? "line-through" : "" }}>
      {name}
      {!done ? <button onClick={props.completed}>Complete Item</button> : ""}
      <button onClick={props.remove}>Remove Item</button>
    </li>
  );
}
