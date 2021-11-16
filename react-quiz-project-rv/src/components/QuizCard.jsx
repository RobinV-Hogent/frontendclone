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
        <Card style={{ width: '18rem', borderRadius: '0px', border: '1px solid black', transform: 'skew(-3deg)', boxShadow: '1px 1px 0 0, 2px 2px 0 0, 3px 3px 0 0, 4px 4px 0 0, 5px 5px 0 0' }}>
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
                

                <Link to={`/quiz/info`}>
                    <button onClick={changeSelectedQuiz} className="info-button">Info</button>
                </Link>
                </Card.Body>
            </Card>
        )
}

export default QuizCard;