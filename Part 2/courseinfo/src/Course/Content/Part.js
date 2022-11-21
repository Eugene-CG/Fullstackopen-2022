import React from "react";

export const Part = ({ id, name, exercises }) => {
  return (
    <div
      key={id}
      style={{ display: "flex", gap: "30px", fontSize: "24px" }}
    >
      <p>{name}</p>
      <p>{exercises}</p>
    </div>
  );
};
