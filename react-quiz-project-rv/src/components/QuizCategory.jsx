import QuizCard from "../components/QuizCard";
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const QuizCategory = () => {
	return (
		<>
		<h2>Quiz Category</h2>
		<ListGroup horizontal className="quizlist">
			<ListGroup.Item><QuizCard></QuizCard></ListGroup.Item>
			<ListGroup.Item><QuizCard></QuizCard></ListGroup.Item>
			<ListGroup.Item><QuizCard></QuizCard></ListGroup.Item>
			<ListGroup.Item><QuizCard></QuizCard></ListGroup.Item>
		</ListGroup>
		</>
	)
}

export default QuizCategory;