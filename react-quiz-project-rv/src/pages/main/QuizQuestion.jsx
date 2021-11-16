import QuizQuestionItem from '../../components/QuizQuestionItem'
import { useContext } from 'react';
import { Button, Alert, Tab, ListGroup, Col, Row } from 'react-bootstrap'
import { useQuizzes } from '../../contexts/QuizProvider';
import { useQuestions } from '../../contexts/QuestionProvider';

export default function QuizQuestion() {

    const { currentQuiz } = useQuizzes()
    const { questions } = useQuestions()

    console.log(currentQuiz)
    console.log(questions)

    const questionList = questions.filter((e) => e.quiz_id === currentQuiz.id)

    let question_no = 1
    const quizQuestionItems = []
    let item

    return (
        <>
            <img src={currentQuiz.img} className="banner" />

            {questionList.map((qu) => {
                qu.qu_no = question_no
                question_no = question_no + 1
                item = <QuizQuestionItem key={qu.id} {...qu}></QuizQuestionItem>
                quizQuestionItems.push(item)
                console.log(item)
                return item
            })}

            {console.log(quizQuestionItems)}

            {/*<Button onClick={checkAnswers}>Validate</Button>*/}
        </>


    )
}