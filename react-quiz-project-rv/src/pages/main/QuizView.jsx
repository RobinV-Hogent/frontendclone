import React from 'react'
import { useQuizzes } from '../../contexts/QuizProvider'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const QuizView = () => {

    //#region PROVIDERS
    const { currentQuiz } = useQuizzes()
    //#endregion

    return (


        <>
            <img src={currentQuiz.img} className="banner" />
            <h1>{currentQuiz.title}</h1>
            <p>{currentQuiz.description}</p>
            
            
            <Link className="button" to={`/quiz/play`}>
                <Button variant="success">Play The Quiz</Button>
            </Link>

        </>
        )
}

export default QuizView