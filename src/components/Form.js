import React from "react";

export default function Form(props) {
  // using props to change the list item based off completion
  return (
    <form onSubmit={props.onSubmit} style={{ paddingLeft: 40, marginTop: 16 }}>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="To do list item"
      />
      <button type="submit">Submit Item:</button>
    </form>
  );
}
