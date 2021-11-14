import { useContext } from 'react';
import { Card, Button, Badge } from 'react-bootstrap'
import { CategoryContext } from '../contexts/CategoryProvider';


const QuizCard = ({ id, title, description, img, rating, category }) => {

    const { categories } = useContext(CategoryContext)

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
                    <Button variant="primary">Play</Button>
                </Card.Body>
            </Card>
        )
}

export default QuizCard;