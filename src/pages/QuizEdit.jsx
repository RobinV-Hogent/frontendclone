import { FormProvider, useForm } from "react-hook-form";
import LabelInput from "../components/LabelInput";
import { Button } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import { useSession } from "../contexts/AuthProvider";
import { useHistory, useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import * as apiQuizzes from "../api/quizzes";
import CategoryTable from "../components/old/CategoryTable";
import { CATEGORY_DATA } from "../data/mock-data";

const validationRules = {
  title: {
    required: "Title is required",
    minLength: { value: 3, message: "Title should have at least 3 characters" },
  },
  description: { required: "The quiz needs a description" },
  img: { required: "Img is required" },
  category: {
    required: "You need to enter a number for the category",
    min: { value: 1, message: "lowest value is 1" },
    max: {
      value: CATEGORY_DATA.length,
      message: `highest values is ${CATEGORY_DATA.length}`,
    },
  },
};

export default function QuizEdit() {
  const { id } = useParams();
  const { error, user } = useSession();

  const {
    data: currentQuiz,
    isLoading,
    isError,
  } = useQuery(["quizEdit", id], () => apiQuizzes.getQuizById(id), {
    refetchOnMount: true,
  });

  const history = useHistory();
  const methods = useForm();
  const { handleSubmit } = methods;

  const goToHomePage = useCallback(() => {
    history.replace(`/quizzes/detail/${id}`);
  }, [history]);

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "Error: Something went wrong try again later";
  }

  const handleUpdate = async ({ title, description, img, category }) => {
    console.log({ title, description, img, category });
    await apiQuizzes.updateQuizById(id, {
      title,
      description,
      img,
      category,
    });
    history.replace(`/quizzes/detail/${id}`);
  };

  return (
    <>
      {user?.roles.includes("admin") ? (
        <>
          {Boolean(currentQuiz) ? (
            <FormProvider {...methods}>
              <h1>Edit Quiz: {currentQuiz?.title}</h1>
              <form onSubmit={handleSubmit(handleUpdate)}>
                <div className="shadowBox p-5 fit-content">
                  <LabelInput
                    label="title"
                    type="text"
                    defaultValue=""
                    placeholder="Title"
                    validation={validationRules.title}
                    data-cy="editTitle"
                  />
                  <LabelInput
                    label="description"
                    type="text"
                    defaultValue=""
                    placeholder="Description"
                    validation={validationRules.description}
                    data-cy="editDescription"
                  />
                  <LabelInput
                    label="img"
                    type="text"
                    defaultValue=""
                    placeholder="Img (URL)"
                    validation={validationRules.img}
                    data-cy="editImg"
                  />
                  <LabelInput
                    label="category"
                    type="text"
                    defaultValue=""
                    placeholder={`Category Id: 1 - ${CATEGORY_DATA.length}`}
                    validation={validationRules.category}
                    data-cy="editCategory"
                  />
                  <button
                    variant="primary"
                    className="shadowBox noborder"
                    type="submit"
                    data-cy="editSubmit"
                  >
                    Update Quiz
                  </button>
                  <button
                    className="shadowBox noborder m-1"
                    onClick={goToHomePage}
                  >
                    Go Back To Details Page
                  </button>
                </div>
                <br />
                <b>Categories</b>
                <CategoryTable />
              </form>
            </FormProvider>
          ) : (
            <>
              <p className="error-text">
                Quiz with Id: {id} could not be found
              </p>
              <button className="info-button" onClick={goToHomePage}>
                Go back to the homepage
              </button>
            </>
          )}
        </>
      ) : (
        history.replace("/")
      )}
    </>
  );
}
