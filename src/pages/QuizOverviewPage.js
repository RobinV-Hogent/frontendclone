import QuizOverview from "../components/QuizOverview";
import { useQuizzes } from "../contexts/QuizContext";
// import { socket } from "../api/socket";
import { useCallback, useEffect } from "react";

const QuizOverviewPage = () => {
  const { quizzes } = useQuizzes();

  //   useEffect(() => {
  //     socket.on("receive_message", (data) => {
  //       alert(data.msg);
  //     });
  //   }, [socket]);

  //   const sendmsg = useCallback(() => {
  //     console.log("clicked");
  //     socket.emit("send_msg", {
  //       msg: "hello this message was sent from another computer",
  //     });
  //   }, []);

  return (
    <>
      {/* <button onClick={() => sendmsg()}>send</button> */}
      <QuizOverview quizzes={quizzes} />
    </>
  );
};

export default QuizOverviewPage;
