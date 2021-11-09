import { Card, Button } from 'react-bootstrap'


const QuizCard = () => {
    return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" alt="QuizCard Image" className="quizcard-image" src="https://images.pexels.com/photos/7078041/pexels-photo-7078041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                <Card.Body>
                    <Card.Title>QuizCard Title</Card.Title>
                    <Card.Text>
                        QuizCard description
                    </Card.Text>
                    <Button variant="primary">Play</Button>
                </Card.Body>
            </Card>
        )
}

export default QuizCard;