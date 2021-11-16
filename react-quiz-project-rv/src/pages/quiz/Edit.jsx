import { useQuizzes } from "../../contexts/QuizProvider"
import { useForm, FormProvider } from "react-hook-form";
import { useEffect, useCallback } from "react";

export default function QuizEdit() {

    const { currentQuiz } = useQuizzes()

    return (
        <>
            <FormProvider>
                <h1>Edit: {currentQuiz.title}</h1>



            </FormProvider>
        </>
        
        )
}