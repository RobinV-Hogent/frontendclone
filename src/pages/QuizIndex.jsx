import { Link } from "react-router-dom";
import { Table, Badge, Button, Offcanvas } from "react-bootstrap";
import * as api from "../api/quizzes";
import { useQuery } from "react-query";
import { CATEGORY_DATA as categories } from "../data/mock-data";
import { useState } from "react";
import { useSession } from "../contexts/AuthProvider";
import { useHistory } from "react-router-dom";
import { BiCog } from "react-icons/bi";

export default function QuizIndex() {
  const [show, setShow] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState({});

  const history = useHistory();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnClick = (quiz) => {
    setSelectedQuiz(quiz);
    handleShow();
  };

  const { data, isLoading, isError } = useQuery("quizIndex", api.getAllItems);
  const { user } = useSession();

  if (Boolean(user)) {
    if (!user?.roles.includes("admin")) history.replace("/");
  }

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "Error: Something went wrong try again later.";
  }

  return (
    <>
      <h1>Quizzes</h1>

      <div className="shadowBox">
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {data.quizzes.map((quizItem) => {
              return <QuizListItem key={quizItem.id} item={quizItem} />;
            })}
          </tbody>
        </Table>
      </div>

      <Offcanvas className="shadowBox m-5" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{selectedQuiz?.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>{selectedQuiz?.id}</p>
          <img src={selectedQuiz?.img} className="canvas-img" alt="" />
          <p>{selectedQuiz?.description}</p>
          <p>
            <b>Questions:</b>
          </p>
          <ul>
            {selectedQuiz?.questions?.map((q) => {
              return <li key={q.id}>{q.question}</li>;
            })}
          </ul>
          <br />
          <Link data-cy="quizIndexEdit" to={`/quiz/edit/${selectedQuiz.id}`}>
            <BiCog className="editbutton" />
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );

  function QuizListItem(item) {
    const quizItem = item.item;

    return (
      <>
        <tr
          onClick={() => handleOnClick(quizItem)}
          className="pointer changeRed"
          data-cy="quizListItem"
        >
          <td data-cy="quizListItemId">{quizItem.id}</td>
          <td data-cy="quizListItemTitle">{quizItem.title}</td>
          <td data-cy="quizListItemCategory">
            {
              categories.filter((cat) => cat.id === quizItem.category)[0]
                .cat_name
            }
          </td>
        </tr>
      </>
    );
  }
}
