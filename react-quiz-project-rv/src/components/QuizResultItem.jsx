import React from 'react'
import { Alert } from 'react-bootstrap'

const QuizResultItem = ({ question, user_answer, correct_answer }) => {

    return (


        <>
            <Alert variant={user_answer === correct_answer ? "success" : "danger"}>
                <Alert.Heading>{question}</Alert.Heading>
                <p>
                    Your answer: {user_answer}
                    <br />
                    Correct answer: {correct_answer}
                </p>
            </Alert>

        </>
    )
}

export default QuizResultItem