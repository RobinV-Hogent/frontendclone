import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuizzes } from "../contexts/QuizContext";

import { io } from "socket.io-client";
import { Navigate, useNavigate } from "react-router";
const socket = io.connect("http://localhost:9001");

const PlayQuizStart = () => {
  const navigate = useNavigate();

  const [room, setRoom] = useState("");
  // const [playerCount, setPlayerCount] = useState(0);

  const { id } = useParams();

  const { selectQuiz, quiz } = useQuizzes();

  useEffect(() => {
    selectQuiz(id);
  }, [id]);

  const createNewRoom = useCallback(() => {
    socket.emit("createRoom", {});
  }, []);

  useEffect(() => {
    socket.on("roomcreated", ({ roomnumber }) => {
      if (roomnumber === false) console.log("room could not be created");
      else {
        console.log("created room with id: " + roomnumber);
        navigate(`/gatherpeople/quiz/${quiz?.id}/room/${roomnumber}`);
      }
    });
  }, [socket]);

  return (
    <>
      {/* <h2>Do you want to play this quiz?</h2> */}

      <div className="quiz-start-panel">
        <div className="quiz-start-left">
          <div className="quiz-name-title">{quiz?.title}</div>
          <div className="quiz-name-description">{quiz?.description}</div>
        </div>
        <div className="quiz-start-right">
          <div className="buttongroup">
            <Link to={`/gatherpeople/quiz/${quiz?.id}/room/${room}`}>
              <button className="buttongroupbutton">JOIN</button>
            </Link>
            <button
              className="buttongroupbutton createbutton"
              onClick={() => createNewRoom()}
            >
              CREATE
            </button>
          </div>
          <div className="inputSearchContainer">
            <input
              className="searchQuiz"
              placeholder="JOIN ROOM"
              style={{ width: "325px" }}
              type="text"
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayQuizStart;
