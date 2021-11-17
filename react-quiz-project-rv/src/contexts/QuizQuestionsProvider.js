//#region imports
import {
	createContext,
	useMemo,
	useState,
	useContext,
} from 'react';
import axios from 'axios';
//#endregion

export const QuizQuestionsContext = createContext();
export const useQuizQuestions = () => useContext(QuizQuestionsContext);

export const QuizQuestionsProvider = ({ children }) => {

	const [questionsWithAnswers, setQuestionsWithAnswers] = useState([]);

	/*
	 * [
	 *	{
	 *		question_id: 1
	 *		correct_answer: 'France'
	 *		user_answer: 'Belgium'
	 *	},
	 *	
	 *	{
	 *		question_id: 5
	 *		correct_answer: 'Rome'
	 *		user_answer: 'Rome'
	 *	}
	 * ]
	 */

	const value = useMemo(() => ({
		questionsWithAnswers,
		setQuestionsWithAnswers
	}), [questionsWithAnswers, setQuestionsWithAnswers]);

	return (
		<QuizQuestionsContext.Provider value={value} >
			{children}
		</QuizQuestionsContext.Provider>
	);
};
