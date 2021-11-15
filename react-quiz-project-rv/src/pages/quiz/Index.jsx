import { useContext } from 'react'
import { QuizContext } from "../../contexts/QuizProvider";
import { Table, Badge } from 'react-bootstrap'
import { CategoryContext } from '../../contexts/CategoryProvider';

export default function QuizIndex() {
    const { quizzes } = useContext(QuizContext)
    const { categories } = useContext(CategoryContext)


    return (
        <>
            <h1>Quizzes</h1>

            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        quizzes.map((quizItem) => {
                            return (
                                <tr>
                                    <td>{quizItem.id}</td>
                                    <td>{quizItem.title}</td>
                                    <td>{quizItem.description}</td>
                                    <td><Badge bg="dark" text="light">{categories.filter((cat) => cat.id === quizItem.category)[0].cat_name}</Badge></td>
                                    <td><meter value={quizItem.rating} /></td>

                                    {/*edit en delete pagina nog maken*/}
                                    <td><a href="edit">Edit</a></td>
                                    <td><a href="delete">Delete</a></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>

        </>

    )


    
}
