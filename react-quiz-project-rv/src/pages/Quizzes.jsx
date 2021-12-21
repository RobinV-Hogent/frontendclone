import QuizList from "../components/QuizList";
import { CATEGORY_DATA } from "../data/mock-data";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";

import { useQuery } from "react-query";
import * as api from "../api/quizzes";
import Login from "../components/Login";

export default function Quizzes() {
  const { data, isLoading, isError } = useQuery("quizzes", api.getAllItems, {
    refetchOnMount: true,
  });

  if (isLoading) {
    return (
      <>
        <Spinner animation="border" variant="primary" /> "Loading";
      </>
    );
  }

  if (isError) {
    return "Error: Something went wrong try again later.";
  }

  return (
    <>
      <br />

      <ButtonGroup aria-label="Basic example">
        {CATEGORY_DATA.map((cat) => {
          return (
            <Button
              key={cat.id}
              href={`#${cat.cat_name}`}
              variant="secondary"
              key={cat.id}
            >
              {cat.cat_name}
            </Button>
          );
        })}
      </ButtonGroup>

      <br />
      <br />

      {CATEGORY_DATA.map((cat) => {
        return (
          <div key={cat.id}>
            <h1 id={cat.cat_name}>{cat.cat_name}</h1>
            <div className="quiz-list">
              <QuizList cat={cat.id} quizzes={data.quizzes} />
            </div>
          </div>
        );
      })}
    </>
  );
}
