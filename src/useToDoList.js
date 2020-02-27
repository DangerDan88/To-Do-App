import React, { useState } from "react";

const useToDosList = callback => {
  const [toDos, seToDos] = useState("");
  const handleFormSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  return {
    handleFormSubmit,
    toDos
  };
};
export default useToDosList;
