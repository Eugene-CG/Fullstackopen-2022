import React from "react";
import StatisticLine from "./StatisticLine";

export default function Statistics({ all, average, positive }) {
  if (all === 0) return <div>No feedback given</div>;
  return (
    <>
      <StatisticLine
        text="All"
        value={all}
      />
      <StatisticLine
        text="Average"
        value={average}
      />
      <StatisticLine
        text="Positive"
        value={positive}
      />
    </>
  );
}
