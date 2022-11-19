import React from "react";
import { useState } from "react";
import Button from "./Button";

export default function App() {
  const [feedback, changeFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleGoodClick = () => {
    changeFeedback({ ...feedback, good: feedback.good + 1 });
  };
  const handleNeutralClick = () => {
    changeFeedback({ ...feedback, neutral: feedback.neutral + 1 });
  };
  const handleBadClick = () => {
    changeFeedback({ ...feedback, bad: feedback.bad + 1 });
  };
  const all = feedback.good + feedback.neutral + feedback.bad;
  const average = (feedback.good - feedback.bad) / all;
  const positive = feedback.good / all;
  return (
    <div>
      <h1>Give feedback</h1>
      <Button
        handleClick={handleGoodClick}
        text="Good"
      />
      <Button
        handleClick={handleNeutralClick}
        text="Neutral"
      />
      <Button
        handleClick={handleBadClick}
        text="Bad"
      />
      <h2>statistics</h2>
      <p>Good: {feedback.good}</p>
      <p>neutral: {feedback.neutral}</p>
      <p>bad: {feedback.bad}</p>

      <p>all: {all}</p>
      <p>average: {average}</p>
      <p>positive: {positive}</p>
    </div>
  );
}
