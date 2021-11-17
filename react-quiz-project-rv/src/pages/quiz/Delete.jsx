import { useQuizzes } from "../../contexts/QuizProvider"
import { Button, Alert } from 'react-bootstrap'
import { useCategories } from "../../contexts/CategoryProvider"

export default function QuizDelete() {

    const { currentQuiz } = useQuizzes()
    const { categories } = useCategories()

    return (
        <>
            <h1>Delete: {currentQuiz.title}</h1>


            <Alert variant="danger" className="mt-5">
                <Alert.Heading></Alert.Heading>
                <p>
                    <b>Title:</b> {currentQuiz.title}
                </p>
                <hr />
                <p>
                    <b>Description:</b> {currentQuiz.description}
                </p>
                <hr />
                <p>
                    <b>Category:</b> {categories.filter((cat) => cat.id === currentQuiz.category)[0].cat_name}
                </p>
                <hr />
                <p>
                    <b>Quiz_id:</b> {currentQuiz.id}
                </p>
                <hr />
                <div className="d-flex justify-content-start">
                    <Button variant="danger">
                        Delete
                    </Button>
                </div>
            </Alert>
        </>

    )
}