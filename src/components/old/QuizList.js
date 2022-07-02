import QuizItem from "./QuizItem";

const QuizList = ({ cat, quizzes }) => {
  return (
    <>
      {quizzes
        .filter((q) => q.category === cat)
        .map((q) => {
          return <QuizItem key={q.id} {...q} className="quiz-item" />;
        })}
    </>
  );
};

export default QuizList;
