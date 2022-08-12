import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuizzes } from "../contexts/QuizContext";
import io from "socket.io-client";
import { useSession } from "../contexts/AuthProvider";
import { ImUsers } from "react-icons/im";

const socket = io.connect("http://localhost:9001");

const PlayQuizGatherPlayers = () => {
  const { id, r } = useParams();
  const [playerCount, setPlayerCount] = useState(0);
  const [playerNames, setPlayerNames] = useState([]);
  const [chat, setChat] = useState([
    { username: "Bot", msg: "Welcome to this chat" },
  ]);
  const chatinput = useRef();
  const playerbox = useRef();

  const [room, setRoom] = useState(r);
  const { selectQuiz, quiz } = useQuizzes();
  const { user } = useSession();

  const [color, setColor] = useState(
    new Array("red", "blue", "pink", "purple")[
      Math.floor(Math.random() * 4 - 1)
    ]
  );

  useEffect(() => {
    setChat([{ username: "Bot", msg: "Welcome to this chat" }]);
  }, [room]);

  useEffect(() => {
    socket.emit("joinRoom", { username: user?.name, room: r });
  }, []);

  useEffect(() => {
    socket.on("joinmsg", (data) => console.log(data));
    socket.on("roomUsers", (data) => {
      setPlayerNames(data.users);
    });
    socket.on("receivemsg", ({ username, msg }) => {
      console.log(chat);

      const message = new Object();
      message.username = username;
      message.msg = msg;

      // chat.push({ username, msg });
      // console.log(...chat, "test": { username, msg });
      setChat((prev) => [...prev, message]);
      // chat.push({ username, msg });
    });
  }, [socket]);

  useEffect(() => {
    console.log(chat);
  }, [chat]);

  useEffect(() => {
    if (id !== undefined) selectQuiz(id);
  }, [id]);

  const showPlayerList = useCallback(() => {
    playerbox.current.style.display = "block";
  }, []);

  const closePlayerList = useCallback(() => {
    playerbox.current.style.display = "none";
  });

  const sendmessage = useCallback((event, msg) => {
    if (event.which === 13) {
      socket.emit("sendmsg", { username: user?.name, room: r, msg });
      chatinput.current.value = "";
    }
  }, []);

  return (
    <>
      <button onClick={() => showPlayerList()} className="showPlayersBtn">
        Players
      </button>

      <div className="quiz-name-title">{playerNames.length} PLAYERS</div>
      <div className="quiz-name-title">{quiz?.title}</div>
      <div className="playerbox" ref={playerbox}>
        <div className="playerboxclose" onClick={() => closePlayerList()}>
          +
        </div>
        {playerNames.map((player) => {
          return <p key={player?.id}>{player?.username} </p>;
        })}
      </div>
      <div className="chatbox">
        <div className="chat">
          {chat.map((item, idx) => {
            return (
              <div className="chat-item" key={idx}>
                <span className="usernamechat" style={{ color: color }}>
                  {item?.username}
                </span>
                : {item?.msg}
              </div>
            );
          })}
        </div>
        <input
          className="chatinput"
          ref={chatinput}
          onKeyDown={(e) => {
            sendmessage(e, e.target.value);
          }}
          style={{}}
          type={"text"}
        />
      </div>
    </>
  );
};

export default PlayQuizGatherPlayers;
