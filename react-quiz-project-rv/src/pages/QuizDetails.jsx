import { useState } from "react";
import { useParams } from "react-router-dom";
import * as apiQuizzes from "../api/quizzes";
import * as apiScores from "../api/scores";
import { useQuery, useMutation } from "react-query";
import { Spinner, Table, Button } from "react-bootstrap";
import { useSession } from "../contexts/AuthProvider";
import { useHistory } from "react-router-dom";
import { BiCog } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function QuizDetails() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const history = useHistory();

  const { id } = useParams();

  const { user } = useSession();

  const {
    data: currentQuiz,
    isLoading,
    isError,
  } = useQuery(["quiz", id], () => apiQuizzes.getQuizById(id));

  const { data: userScores } = useQuery(["quizUserScore"], () =>
    apiScores.getScoresByUserId(user?.id)
  );

  const { mutate: createScore } = useMutation(apiScores.createScore);
  const { mutate: deleteScore } = useMutation(apiScores.deleteScoreById);

  if (isLoading) {
    return (
      <>
        <Spinner animation="border" variant="primary" />
        Loading
      </>
    );
  }

  if (isError) {
    return "Error: Something went wrong try again later.";
  }

  const handleOnDeleteScore = ({ id }) => {
    console.log("deleting ...");
    deleteScore({ id: id });
    history.replace("/");
  };

  const handleOnSaveScore = (event) => {
    createScore({ quiz: currentQuiz.id, user: user.id, score: score });
    history.replace("/");
  };

  const handleAnswerOptionClick = (isRight) => {
    if (isRight) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < currentQuiz.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      {user?.roles.includes("admin") ? (
        <Link to={`/quiz/edit/${currentQuiz.id}`}>
          <BiCog className="editbutton" />
        </Link>
      ) : (
        <></>
      )}
      <img className="banner" src={currentQuiz.img} alt=""></img>
      <div></div>
      <p className="light">{currentQuiz.id}</p>
      <h1 className="quiz-title">{currentQuiz.title}</h1>
      <p className="quiz-description">{currentQuiz.description}</p>

      {showScore ? (
        <div className="question-all">
          <div className="quiz-end">Quiz has ended</div>
          <div className="score-section">
            You scored {score} out of {currentQuiz.questions.length}
            <br />
            <button className="info-button" onClick={handleOnSaveScore}>
              Save Score
            </button>
          </div>
        </div>
      ) : (
        <>
          {currentQuiz.questions.length === 0 ? (
            <p className="danger">
              There are no questions available for this quiz
            </p>
          ) : (
            <>
              <div className="question-all">
                <div className="question-section">
                  <div className="question-number">
                    Question {currentQuestion + 1}/
                    {currentQuiz.questions.length}
                  </div>
                  <div className="question-part m-2">
                    {currentQuiz.questions[currentQuestion].question}
                  </div>
                </div>
                <div className="answer-section">
                  <button
                    className="info-button m-2"
                    onClick={() =>
                      handleAnswerOptionClick(
                        currentQuiz.questions[currentQuestion].answer1 ===
                          currentQuiz.questions[currentQuestion].correctAnswer
                      )
                    }
                  >
                    {currentQuiz.questions[currentQuestion].answer1}
                  </button>

                  <button
                    className="info-button m-2"
                    onClick={() =>
                      handleAnswerOptionClick(
                        currentQuiz.questions[currentQuestion].answer2 ===
                          currentQuiz.questions[currentQuestion].correctAnswer
                      )
                    }
                  >
                    {currentQuiz.questions[currentQuestion].answer2}
                  </button>

                  <button
                    className="info-button m-2"
                    onClick={() =>
                      handleAnswerOptionClick(
                        currentQuiz.questions[currentQuestion].answer3 ===
                          currentQuiz.questions[currentQuestion].correctAnswer
                      )
                    }
                  >
                    {currentQuiz.questions[currentQuestion].answer3}
                  </button>
                </div>
              </div>
            </>
          )}

          <div className="scores">
            <h2>Your scores</h2>

            {userScores?.length === 0 ? (
              <p>No scores yet for this quiz.</p>
            ) : (
              <>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Score</th>
                      <th>Date</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userScores?.map((scoreItem) => {
                      return (
                        <tr key={scoreItem.id}>
                          <td>{scoreItem.id}</td>
                          <td>
                            {scoreItem.score}/{currentQuiz.questions.length}
                          </td>
                          <td>{new Date(scoreItem.date).toLocaleString()}</td>
                          <button
                            className="info-button"
                            onClick={() =>
                              handleOnDeleteScore({ id: scoreItem.id })
                            }
                          >
                            Remove
                          </button>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}
