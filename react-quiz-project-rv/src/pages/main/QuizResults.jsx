import React from 'react'
import { Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import QuizResultItem from '../../components/QuizResultItem'
import { useQuizQuestions } from '../../contexts/QuizQuestionsProvider'
import { useScore } from '../../contexts/ScoreProvider'


const QuizResults = () => {

    //#region PROVIDERS
    const { questionsWithAnswers } = useQuizQuestions()
    const { score, setScore } = useScore()
    //#endregion

    console.log(questionsWithAnswers)

    return (


        <>
            <h1>QuizResults</h1>
            <hr />

            {questionsWithAnswers.map((e) => {
                return <QuizResultItem key={e.question_id}  {...e} />
            })}

            


        </>
    )
}

export default QuizResults