import { useContext, useCallback } from 'react';
import { Card, Button, Badge } from 'react-bootstrap'
import { CategoryContext, useCategories } from '../contexts/CategoryProvider';
import { QuizContext, useQuizzes } from '../contexts/QuizProvider';
import { Link } from 'react-router-dom'


const QuizCard = ({ id, title, description, img, rating, category }) => {

    //#region PROVIDERS
    const { categories } = useCategories()
    const { setCurrentQuiz, currentQuiz } = useQuizzes()
    //#endregion


    const changeSelectedQuiz = useCallback((e) => {
        setCurrentQuiz({ id, title, description, img, rating, category })
    })

    return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" alt="QuizCard Image" className="quizcard-image" src={ img } />
                <Card.Body>
                    <Card.Title>{ title }</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        <Badge bg="dark" text="light">
                            { categories.filter(c => c.id === category)[0].cat_name }
                        </Badge>
                    </Card.Text>
                    <Card.Text>
                        Rating: <meter id="disk_d" value={ rating }>60%</meter>
                    </Card.Text>
                

                <Link className="button" to={`/quiz/info`}>
                    <Button onClick={changeSelectedQuiz} variant="primary">Info</Button>
                </Link>
                </Card.Body>
            </Card>
        )
}

export default QuizCard;