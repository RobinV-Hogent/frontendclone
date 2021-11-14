import { useCallback, useContext } from "react"
import { useForm, FormProvider } from 'react-hook-form'
import { QuizContext } from "../../contexts/QuizProvider"
import { Form, Button } from 'react-bootstrap'
import { CategoryContext } from "../../contexts/CategoryProvider"

export default function QuizCreate() {

    const { createQuiz } = useContext(QuizContext)
    const { categories } = useContext(CategoryContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm();

    const onSubmit = useCallback(
        async (data) => {
            try {
                console.log(data)
                console.log('submit triggered')
                //await createQuiz()
            } catch (e) {
                console.error(e)
            }
        }, [createQuiz]
    );


    //const validationRules = {
    //    user: {
    //        required: "this is required",
    //        minLength: { value: 2, message: "Min length is 2" },
    //    },
    //    date: { required: "this is required" },
    //    place: { required: "this is required" },
    //    amount: {
    //        valueAsNumber: true,
    //        required: "this is required",
    //        min: { value: 1, message: "min 1" },
    //        max: { value: 5000, message: "max 5000" },
    //    },
    //};

    return (
        <>
            <h1>Create Quiz</h1>

            <FormProvider handleSubmit={handleSubmit}>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Quiz Title</Form.Label>
                        <Form.Control placeholder="Enter Quiz Title" />
                        <Form.Text className="text-muted">
                            This title will be shown on the homepage
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter Description Here" />
                    </Form.Group>


                    <Form.Group className="mb-5">
                        Category: 
                        <Form.Select aria-label="Default select example">
                            
                            {
                                categories.map((cat) => {
                                    return <option value={cat.id}>{cat.cat_name}</option>
                                })
                            }


                        </Form.Select>
                    </Form.Group>
                    

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </FormProvider>
        </>
    )
}