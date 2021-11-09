import {
	createContext,
	useMemo,
	useState,
	useEffect,
	useContext,
	useCallback
} from 'react';
import axios from 'axios';
import config from '../config.json';

export const QuizContext = createContext();
export const useQuizzes = () => useContext(QuizContext);

export const QuizzesProvider = ({
	children
}) => {

	// states
	// ...

	// haalt de quizzes weer op door de lijst van quizzes te refreshen
	const refreshQuizzes = useCallback(async () => {}, []);

	const createQuiz = useCallback(async ({ /* parameters waarmee je een quiz kan maken */ }) => {}, []);

	const deleteQuiz = useCallback(async (id /* ID van de quiz die verwijderd moet worden */) => {}, []);

	const value = useMemo(() => ({
		// states doorgeven
		// ...
	}), [/* DEPENDENCIES */]);

	return (
		<QuizzesContext.Provider value={value} >
			{children}
		</QuizzesContext.Provider>
	);
};