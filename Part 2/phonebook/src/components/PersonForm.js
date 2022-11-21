import React from "react";
import { PersonInput } from "./PersonInput";

export const PersonForm = ({ addNote, setName, setNumber }) => {
  return (
    <form onSubmit={addNote}>
      <PersonInput
        text="Name:"
        onChange={setName}
      />
      <PersonInput
        text="Number:"
        onChange={setNumber}
      />
      <button type="submit">add</button>
    </form>
  );
};
