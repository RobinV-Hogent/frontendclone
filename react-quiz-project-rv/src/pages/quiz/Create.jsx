import { useCallback, useContext } from "react";
import { QuizContext } from "../../contexts/QuizProvider";
import { Form, Button } from "react-bootstrap";
import { CategoryContext } from "../../contexts/CategoryProvider";

export default function QuizCreate() {
  const { createQuiz } = useContext(QuizContext);
  const { categories } = useContext(CategoryContext);

  const onSubmit = useCallback(
    async (data) => {
      try {
        console.log(data);
        console.log("submit triggered");
        //await createQuiz()
      } catch (e) {
        console.error(e);
      }
    },
    [createQuiz]
  );

  //const validationRules = {
  //    user: {
  //        required: "this is required",
  //        minLength: { value: 2, message: "Min length is 2" },
  //    },
  //    date: { required: "this is required" },
  //    place: { required: "this is required" },
  //    amount: {
  //        valueAsNumber: true,
  //        required: "this is required",
  //        min: { value: 1, message: "min 1" },
  //        max: { value: 5000, message: "max 5000" },
  //    },
  //};

  return (
    <>
      <h1>Create Quiz</h1>
    </>
  );
}
