import React from "react";

export const ToDo = props => {
  const handleChange = event => {
    const index = props.index;
    const value = event.target.checked;
    props.onToDoChange(index, value);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={props.done}
        onChange={event => handleChange(event)}
      />
      {props.label}
    </div>
  );
};
