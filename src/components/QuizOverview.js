import QuizCard from "./QuizCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const QuizOverview = ({ quizzes }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="inputSearchContainer">
        <input
          className="searchQuiz"
          type="text"
          placeholder="Enter a search term"
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="quiz-overview">
        {quizzes
          .filter((e) => e.title.toLowerCase().includes(search.toLowerCase()))
          .map((e) => {
            return (
              <>
                <Link key={e.id} to={`/quiz/${e.id}`}>
                  <QuizCard quiz={e} />
                </Link>
              </>
            );
          })}
      </div>
    </>
  );
};

export default QuizOverview;
