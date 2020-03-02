import React from "react";

export default function ListItem(props) {
  // I am deconstructing the props here into a more workable object cannot be an array had error for this
  const { name, done } = props.todo;
  console.log(props.todo);
  return (
    <li style={{ textDecoration: done ? "line-through" : "" }}>
      {name}
      {!done ? <button onClick={props.completed}>Complete Item</button> : ""}
      <button onClick={props.remove}>Remove Item</button>
    </li>
  );
}
