import { Table, Offcanvas } from "react-bootstrap";
import * as apiScores from "../api/scores";
import { useQuery } from "react-query";
import { CATEGORY_DATA as categories } from "../data/mock-data";
import { useSession } from "../contexts/AuthProvider";
import { useHistory } from "react-router-dom";
import Quizzes from "./Quizzes";

export default function ScoreIndex() {
  const {
    data: sdata,
    isLoading,
    isError,
  } = useQuery("scoreIndex", apiScores.getAllItems);

  const { user } = useSession();

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

  return (
    <>
      <h1>Scores</h1>

      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Quiz_id</th>
            <th>User_id</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sdata.map((scoreItem) => {
            return (
              <tr>
                <td>{scoreItem.id}</td>
                <td>{scoreItem.quiz_id}</td>
                <td>{scoreItem.user_id}</td>
                <td>{scoreItem.score}</td>
                <td>{new Date(scoreItem.date).toLocaleString()}</td>
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
