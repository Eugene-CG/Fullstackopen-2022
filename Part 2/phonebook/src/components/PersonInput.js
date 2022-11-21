import React from "react";

export const PersonInput = ({ text, onChange }) => {
  return (
    <>
      {text}
      <input onChange={onChange} />
    </>
  );
};
