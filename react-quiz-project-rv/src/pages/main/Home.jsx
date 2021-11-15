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
            {categories.map((cat) => {
                return <QuizCategory key={cat.id} {...cat} className="quizCategory"></QuizCategory>
            })}
        </>
        );
}