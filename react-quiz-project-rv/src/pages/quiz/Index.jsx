import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { QuizContext } from "../../contexts/QuizProvider";
import { Table, Badge, Button } from 'react-bootstrap'
import { CategoryContext } from '../../contexts/CategoryProvider';

export default function QuizIndex() {
    const { quizzes, setCurrentQuiz } = useContext(QuizContext)
    const { categories } = useContext(CategoryContext)


    return (
        <>
            <h1>Quizzes</h1>

            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        quizzes.map((quizItem) => {
                            return (
                                <tr>
                                    <td>{quizItem.id}</td>
                                    <td>{quizItem.title}</td>
                                    <td>{quizItem.description}</td>
                                    <td><Badge bg="dark" text="light">{categories.filter((cat) => cat.id === quizItem.category)[0].cat_name}</Badge></td>
                                    <td><meter value={quizItem.rating} /></td>
                                    <td>
                                        <Link className="button" to={`/quiz/edit`}>
                                            <Button onClick={() => setCurrentQuiz(quizItem)} variant="primary">Edit</Button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link className="button" to={`/quiz/delete`}>
                                            <Button onClick={() => setCurrentQuiz(quizItem)} variant="danger">Delete</Button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>

        </>

    )


    
}
