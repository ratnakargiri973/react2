import React from "react";

const Result = ({ correctAnswers, wrongAnswers, totalQuestions }) => {
  return (
    <div className="result">
      <h1>Quiz Completed!</h1>
      <p>Total Questions: {totalQuestions}</p>
      <p>Correct Answers: {correctAnswers}</p>
      <p>Wrong Answers: {wrongAnswers}</p>
      <button onClick={() => window.location.reload()}>Restart Quiz</button>
    </div>
  );
};

export default Result;
