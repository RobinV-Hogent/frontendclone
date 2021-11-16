import { useContext } from 'react'
import { useParams } from "react-router";
import QuizCard from "../../components/QuizCard";
import QuizCategory from "../../components/QuizCategory";
import { CategoryContext } from "../../contexts/CategoryProvider";



export default function Home() {

    // useParams kan gebruikt worden om waarden uit de url te halen bv. => .../:id en .../52 dan wordt er als output "{id:52}" gegeven
    // const params = useParams()

    const { categories } = useContext(CategoryContext)


    return (
        <>
            <div className="banner2">
                <div className="banner2-content">
                    <p className="banner2-title">Robin Quizzes</p>
                    <p>1.000.000 quizzes available right now for you to solve</p>
                    <a href="#quizzes"><button className="info-button">QUIZZES</button></a>

                </div>
            </div>

            <div id="quizzes">
            {categories.map((cat) => {
                return <QuizCategory key={cat.id} {...cat} className="quizCategory"></QuizCategory>
            })}
            </div>
        </>
        );
}