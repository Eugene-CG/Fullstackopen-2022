import React from "react";

export const Filter = ({ onChange }) => {
  return (
    <div>
      Filter:
      <input
        type="text"
        onChange={onChange}
      />
    </div>
  );
};
