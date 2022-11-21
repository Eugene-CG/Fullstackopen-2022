import React from "react";

export const PersonInfo = ({ persons }) => {
  return (
    <div>
      {persons.map(({ name, number }) => {
        return (
          <p key={name}>
            {name} {number}
          </p>
        );
      })}
    </div>
  );
};
