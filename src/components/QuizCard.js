import { memo } from "react";

const QuizCard = memo(({ quiz }) => {
  return (
    <>
      <div className="quiz-card">
        <div className="quiz-card-title">{quiz?.title}</div>
      </div>
    </>
  );
});

export default QuizCard;
