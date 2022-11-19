import React from "react";

export default function Statistics({ all, average, positive }) {
  if (all === 0) return <div>No feedback given</div>;
  return (
    <>
      <p>all: {all}</p>
      <p>average: {average}</p>
      <p>positive: {positive}</p>
    </>
  );
}
