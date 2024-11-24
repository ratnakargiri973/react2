import React from "react";

const Quiz = ({
  question,
  questionNumber,
  totalQuestions,
  selectedOption,
  handleOptionSelect,
  handleNext,
}) => {
  return (
    <div className="quiz">
      <h2>
        Question {questionNumber}/{totalQuestions}
      </h2>
      <p>{question.question}</p>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={selectedOption === option ? "selected" : ""}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={!selectedOption} // Disable if no option is selected
        className="next-button"
      >
        Next
      </button>
    </div>
  );
};

export default Quiz;
