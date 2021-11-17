import { useState, useEffect, useMemo, useCallback } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useQuizQuestions } from '../contexts/QuizQuestionsProvider'
import { useQuestions } from '../contexts/QuestionProvider'
import { useScore } from '../contexts/ScoreProvider'
import QuizQuestion from '../pages/main/QuizQuestion'
import { Link } from 'react-router-dom'

export default function QuizQuestionItem({ id, question, answer1, answer2, answer3, correct_answer, qu_no }) {

    const { score, setScore } = useScore()
    const { questionsWithAnswers, setQuestionsWithAnswers } = useQuizQuestions()
    const { questions } = useQuestions()

    const [option, setOption] = useState(answer1)


    let s = 0

    const changeOption = (val) => {
        setOption(val)
        questionsWithAnswers.filter((q) => q.question_id === id)[0].user_answer = val
    }

    return (
        <>
            <Alert variant="light" className="mb-5 border-light rounded">
                <Alert.Heading className="text-center">Question {qu_no}</Alert.Heading>
                <p className="text-center">
                    {question}
                </p>
                <hr />
                <p className="mb-0 answeroptions">
                    <button className="info-button optionButton" variant="secondary" onClick={() => changeOption(answer1)}>{answer1}</button>
                    <button className="info-button optionButton" variant="secondary" onClick={() => changeOption(answer2)}>{answer2}</button>
                    <button className="info-button optionButton" variant="secondary" onClick={() => changeOption(answer3)}>{answer3}</button>
                </p>
                <br/>
                <p className="mb-0 answeroptions">
                    Selected Value: {option}
                </p>
            </Alert>

        </>

    )

}

