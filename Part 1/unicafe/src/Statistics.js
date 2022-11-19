import React from "react";

export default function Statistics({ all, average, positive }) {
  return (
    <>
      <p>all: {all}</p>
      <p>average: {average}</p>
      <p>positive: {positive}</p>
    </>
  );
}
