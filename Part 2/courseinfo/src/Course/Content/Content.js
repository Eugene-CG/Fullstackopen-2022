import React from "react";
import { Part } from "./Part";

export const Content = ({ parts }) => {
  const content = parts.map(({ id, name, exercises }) => (
    <Part
      key={id}
      name={name}
      exercises={exercises}
    />
  ));
  const total = parts.reduce((pV, cV) => pV + cV.exercises, 0);
  return (
    <div>
      {content}
      <p style={{ fontSize: "30px" }}>{"total of " + total + " exercises"}</p>
    </div>
  );
};
