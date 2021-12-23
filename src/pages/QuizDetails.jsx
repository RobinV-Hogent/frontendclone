import { useState } from "react";
import { useParams } from "react-router-dom";
import * as apiQuizzes from "../api/quizzes";
import * as apiScores from "../api/scores";
import { useQuery, useMutation } from "react-query";
import { Spinner, Table, Button, Modal } from "react-bootstrap";
import { useSession } from "../contexts/AuthProvider";
import { useHistory } from "react-router-dom";
import { BiCog } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CATEGORY_DATA } from "../data/mock-data";

export default function QuizDetails() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  // MODAL
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();

  const { id } = useParams();

  const { user } = useSession();

  const {
    data: currentQuiz,
    isLoading,
    isError,
  } = useQuery(["quiz", id], () => apiQuizzes.getQuizById(id), {
    refetchOnMount: true,
  });

  const { data: userScores } = useQuery(
    ["quizUserScore"],
    () => apiScores.getScoresByUserId(user?.id),
    {
      refetchOnMount: true,
    }
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
    deleteScore({ id: id });
    history.replace("/");
  };

  const handleOnSaveScore = (event) => {
    createScore({ quiz: currentQuiz.id, user: user.id, score: score });
    history.replace("/");
  };

  const deleteQuiz = async () => {
    setShow(true);

    // const qtitle = prompt(
    //   "Are you sure you want to delete this quiz?\nType the title of the quiz in the textbox in order to delete the quiz."
    // );
    // if (
    //   Boolean(qtitle) &&
    //   qtitle.toLowerCase() === currentQuiz?.title.toLowerCase()
    // ) {
  };

  const handleModalDelete = async () => {
    await apiQuizzes.deleteQuiz(currentQuiz?.id);
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
        <>
          <div className="actionButtons">
            <Link data-cy="quizDetailsEdit" to={`/quiz/edit/${currentQuiz.id}`}>
              <BiCog className="editbutton" />
            </Link>
            <RiDeleteBinLine
              data-cy="quizDetailsRemove"
              className="removebutton"
              onClick={deleteQuiz}
            />
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                Are you sure you want to delete this quiz
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ul>
                <li>Title: {currentQuiz.title}</li>
                <li>Description: {currentQuiz.description}</li>
                <li>Img: {currentQuiz.img}</li>
                <li>
                  Category:{""}
                  {
                    CATEGORY_DATA.filter(
                      (e) => e.id === currentQuiz.category
                    )[0].cat_name
                  }
                </li>
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="light" onClick={handleClose}>
                Close
              </Button>
              <Button variant="danger" onClick={handleModalDelete}>
                Delete Quiz
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <></>
      )}
      <img
        className="banner"
        src={currentQuiz.img}
        alt="Not Available"
        data-cy="quizDetailsImg"
      ></img>
      <p className="light">{currentQuiz.id}</p>
      <h1 className="quiz-title" data-cy="quizDetailsTitle">
        {currentQuiz.title}
      </h1>
      <p className="quiz-description" data-cy="quizDetailsDescription">
        {currentQuiz.description}
      </p>

      {showScore ? (
        <div className="question-all">
          <div className="quiz-end">
            Quiz has ended: {score} / {currentQuiz.questions.length}
          </div>
          <div className="score-section">
            <button
              data-cy="quizDetailsSubmitScore"
              className="shadowBox noborder m-2"
              onClick={handleOnSaveScore}
            >
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
                    data-cy="quizDetailsAnswer1"
                    className="shadowBox noborder m-2"
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
                    data-cy="quizDetailsAnswer2"
                    className="shadowBox noborder m-2"
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
                    data-cy="quizDetailsAnswer3"
                    className="shadowBox noborder m-2"
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
            {console.log(userScores)}
            {userScores?.length === 0 ? (
              <p>No scores yet for this quiz.</p>
            ) : (
              <div className="shadowBox">
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Score</th>
                      <th>Date</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  {/* // ?.find((s) => s?.quiz_id === currentQuiz?.id) */}
                  <tbody>
                    {userScores?.map((scoreItem) => {
                      return (
                        <>
                          {scoreItem?.quiz_id === currentQuiz?.id ? (
                            <>
                              <tr key={scoreItem.id}>
                                <td>{scoreItem.id}</td>
                                <td>
                                  {scoreItem.score}/
                                  {currentQuiz.questions.length}
                                </td>
                                <td>
                                  {new Date(scoreItem.date).toLocaleString()}
                                </td>
                                <td>
                                  <RiDeleteBinLine
                                    cy-data="quizDetailsDelete"
                                    className="error-text"
                                    onClick={() =>
                                      handleOnDeleteScore({ id: scoreItem.id })
                                    }
                                  />
                                </td>
                              </tr>
                            </>
                          ) : (
                            <></>
                          )}
                        </>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
