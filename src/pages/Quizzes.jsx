import QuizList from "../components/QuizList";
import { CATEGORY_DATA } from "../data/mock-data";
import { Spinner } from "react-bootstrap";
import { BiError } from "react-icons/bi";

import { useQuery } from "react-query";
import * as api from "../api/quizzes";

export default function Quizzes() {
  const { data, isLoading, isError } = useQuery("quizzes", api.getAllItems, {
    refetchOnMount: true,
  });

  if (isLoading) {
    return (
      <>
        <Spinner animation="border" variant="primary" /> Loading
      </>
    );
  }

  if (isError) {
    return (
      <>
        <p>"Error: Something went wrong try again later."</p>
        <BiError className="error-img" />
      </>
    );
  }

  return (
    <>
      <br />
      {CATEGORY_DATA.map((cat) => {
        if (!Boolean(data.quizzes.find((e) => e.category === cat.id)))
          return <></>;
        return (
          <div className="quiz-slider" key={cat.id}>
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
