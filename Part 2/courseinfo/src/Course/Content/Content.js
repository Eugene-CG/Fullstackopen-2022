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
  return <div>{content}</div>;
};
