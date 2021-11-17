import { useContext } from 'react';
import QuizCard from "../components/QuizCard";
import { QuizContext } from "../contexts/QuizProvider"
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export default function QuizCategory({ id, cat_name }) {

	const { quizzes } = useContext(QuizContext)

	//console.log(quizzes)

	return (
		<>
			<h2>{cat_name}</h2>
			<ListGroup horizontal className="quizlist" style={{ alignItems: 'stretch'}}>
				{
					quizzes.filter(quiz => quiz.category === id).map((quiz) => {
						return <ListGroup.Item key={quiz.id}><QuizCard {...quiz}></QuizCard></ListGroup.Item>
                    })
                }
			</ListGroup>
		</>
	)
}
