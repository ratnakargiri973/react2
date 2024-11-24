import React, { useState } from "react";
import Quiz from "./Quize";
import Result from "./Result";

const App = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Paris",
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Leo Tolstoy", "William Shakespeare", "Mark Twain", "Homer"],
      answer: "William Shakespeare",
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }

    setSelectedOption(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="app">
      {showResult ? (
        <Result
          correctAnswers={correctAnswers}
          wrongAnswers={wrongAnswers}
          totalQuestions={questions.length}
        />
      ) : (
        <Quiz
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          selectedOption={selectedOption}
          handleOptionSelect={handleOptionSelect}
          handleNext={handleNext}
        />
      )}
    </div>
  );
};

export default App;
