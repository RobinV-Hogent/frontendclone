import { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { CategoryContext } from '../../contexts/CategoryProvider';

export default function CategoryIndex() {
    const { categories } = useContext(CategoryContext)


    return (
        <>
            <h1>Categories</h1>

            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        categories.map((catItem) => {
                            return (
                                <tr>
                                    <td>{catItem.id}</td>
                                    <td>{catItem.cat_name}</td>
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