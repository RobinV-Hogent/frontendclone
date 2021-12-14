import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router";

export default function QuizPlay() {
  // const { id } = useParams();
  // const history = useHistory();

  // useEffect(() => {
  //   console.log("id", id);
  //   setQuizToPlay(id);
  // }, [id, setQuizToPlay]);

  // console.log(currentQuiz);

  return (
    <>
      {/* <h1>{currentQuiz.title}</h1> */}
      {/* {console.log(currentQuiz.questions)}
      {console.log(currentQuiz.questions[0])}
      {currentQuiz?.questions?.map((q) => {
        return (
          <div key={q.id}>
            <p>{q.question}</p>
          </div>
        );
      })}

      <h1>{currentQuiz?.title}</h1>
      <button>{currentQuiz.questions[0].answer1}</button>
      <button>{currentQuiz.questions[0].answer2}</button>
      <button>{currentQuiz.questions[0].answer3}</button>
      <button>NEXT</button> */}
    </>
  );
}
