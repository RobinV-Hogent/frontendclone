import { useState, useEffect, useMemo, useCallback } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useScore } from '../contexts/ScoreProvider'

export default function QuizQuestionItem({ id, question, answer1, answer2, answer3, correct_answer, qu_no }) {

    const { score, setScore } = useScore()
    const [option, setOption] = useState(answer1)

    let s = 0

    const changeOption = (val) => {
        setOption(val)
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

