import React from "react";
import { DeleteNote } from "./DeleteNote";

export const PersonInfo = ({ persons, deleteNote }) => {
  return (
    <div>
      {persons.map(({ name, number, id }) => {
        return (
          <div
            key={id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "320px",
            }}
          >
            <p>
              {name} {number}
            </p>
            <DeleteNote onClick={() => deleteNote(id)} />
          </div>
        );
      })}
    </div>
  );
};
