import { Link } from "react-router-dom";

const QuizItem = ({ id, img, title, description, category }) => {
  return (
    <div className="quiz-item">
      <img src={img} alt="" className="card-image" />
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-description">
          <Link to={`/quizzes/detail/${id}`}>
            <button className="info-button">info</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizItem;
