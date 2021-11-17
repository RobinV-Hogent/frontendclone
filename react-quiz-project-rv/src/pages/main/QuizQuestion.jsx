import QuizQuestionItem from '../../components/QuizQuestionItem'
import { useContext, useEffect } from 'react'
import { Button, Alert, Tab, ListGroup, Col, Row } from 'react-bootstrap'
import { useQuizzes } from '../../contexts/QuizProvider'
import { useQuestions } from '../../contexts/QuestionProvider'
import { useQuizQuestions } from '../../contexts/QuizQuestionsProvider'
import { Link } from 'react-router-dom'

export default function QuizQuestion() {

    const { currentQuiz } = useQuizzes()
    const { questions } = useQuestions()
    const { questionsWithAnswers, setQuestionsWithAnswers } = useQuizQuestions()

    useEffect(() => {
        setQuestionsWithAnswers([])
        console.table(currentQuiz)
        console.log(questionList)
    }, [setQuestionsWithAnswers])

    
    

    const questionList = questions.filter((e) => e.quiz_id === currentQuiz.id)

    let question_no = 1
    const quizQuestionItems = []
    let item

    return (
        <>
            <img src={currentQuiz.img} className="banner" />

            {questionList.map((qu) => {
                questionsWithAnswers.push({question_id: qu.id, question: qu.question, user_answer: '', correct_answer: qu.correct_answer})
                qu.qu_no = question_no
                question_no = question_no + 1
                return <QuizQuestionItem key={qu.id} {...qu}></QuizQuestionItem>
            })}

            <center>
                <Link className="button" to={`/quiz/results`}>
                    <button className="info-button">Play The Quiz</button>
                </Link>
            </center>
            
        </>


    )
}