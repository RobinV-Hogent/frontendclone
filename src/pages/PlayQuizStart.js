import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuizzes } from "../contexts/QuizContext";

const PlayQuizStart = () => {
  const { id } = useParams();

  const { selectQuiz, quiz } = useQuizzes();

  useEffect(() => {
    selectQuiz(id);
  }, [quiz]);

  return (
    <>
      <h2>Do you want to play this quiz?</h2>
      <div className="quiz-name-title">{quiz?.title}</div>
      <div className="quiz-name-description">{quiz?.description}</div>
      <div className="buttongroup">
        <button className="buttongroupbutton">JOIN</button>
        <button className="buttongroupbutton createbutton">CREATE</button>
      </div>
      <div className="inputSearchContainer">
        <input
          className="searchQuiz"
          placeholder="JOIN ID"
          style={{ width: "325px" }}
          type="text"
        />
      </div>
    </>
  );
};

export default PlayQuizStart;
