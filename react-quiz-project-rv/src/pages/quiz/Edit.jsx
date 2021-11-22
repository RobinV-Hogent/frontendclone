import { useQuizzes } from "../../contexts/QuizProvider";

export default function QuizEdit() {
  const { currentQuiz } = useQuizzes();

  return (
    <>
      <h1>Edit: {currentQuiz.title}</h1>
    </>
  );
}
