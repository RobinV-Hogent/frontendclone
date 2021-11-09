import { useParams } from "react-router";
import QuizCard from "../components/QuizCard";



export default function Home() {

    // useParams kan gebruikt worden om waarden uit de url te halen bv. => .../:id en .../52 dan wordt er als output "{id:52}" gegeven
    // const params = useParams()


    return (
        <>
            <QuizCard></QuizCard>
        </>
        );
}