import { Card, Button } from 'react-bootstrap'


const QuizCard = () => {
    return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" alt="QuizCard Image" src="holder.js/100px180" />
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