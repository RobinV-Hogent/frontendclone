import { Table, Offcanvas } from "react-bootstrap";
import * as apiScores from "../api/scores";
import { useQuery, useMutation } from "react-query";
import { CATEGORY_DATA as categories } from "../data/mock-data";
import { useSession } from "../contexts/AuthProvider";
import { useHistory } from "react-router-dom";
import Quizzes from "./Quizzes";
import { RiDeleteBinLine } from "react-icons/ri";

export default function ScoreIndex() {
  const {
    data: sdata,
    isLoading,
    isError,
  } = useQuery("scoreIndex", apiScores.getAllItems);

  const { user } = useSession();

  const { mutate: deleteScore } = useMutation(apiScores.deleteScoreById);

  const history = useHistory();

  if (Boolean(user)) {
    if (!user?.roles.includes("admin")) history.replace("/");
  }

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "Error: Something went wrong try again later.";
  }

  const handleOnDeleteScore = ({ id }) => {
    deleteScore({ id: id });
    history.replace("/");
  };

  return (
    <>
      <h1>Scores</h1>

      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Quiz</th>
            <th>User</th>
            <th>Score</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {sdata.map((scoreItem) => {
            return (
              <tr>
                <td>{scoreItem.id}</td>
                <td data-cy="scoreIndexTitle">{scoreItem.title}</td>
                <td data-cy="scoreIndexName">{scoreItem.name}</td>
                <td data-cy="scoreIndexScore">{scoreItem.score}</td>
                <td data-cy="scoreIndexDate">
                  {new Date(scoreItem.date).toLocaleDateString()}
                </td>
                <td>
                  <RiDeleteBinLine
                    data-cy="scoreIndexDelete"
                    className="error-text"
                    onClick={() => handleOnDeleteScore({ id: scoreItem.id })}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );

  //   function QuizListItem(item) {
  //     const quizItem = item.item;

  //     return (
  //       <>
  //         <tr
  //           onClick={() => handleOnClick(quizItem)}
  //           className="pointer changeRed"
  //         >
  //           <td>{quizItem.id}</td>
  //           <td>{quizItem.title}</td>
  //           <td>
  //             {
  //               categories.filter((cat) => cat.id === quizItem.category)[0]
  //                 .cat_name
  //             }
  //           </td>
  //         </tr>
  //       </>
  //     );
  //   }
}
