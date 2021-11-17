import {
	createContext,
	useMemo,
	useState,
	useEffect,
	useContext,
	useCallback
} from 'react';
import axios from 'axios';
import { useFetch } from '../hooks/useFetch';
import { QUIZ_DATA } from "../data/mock-data"


export const QuizContext = createContext();
export const useQuizzes = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {

	const [quizzes, setQuizzes] = useState([]);
	const [currentQuiz, setCurrentQuiz] = useState({});

	const { data: data } = useFetch('http://localhost:9000/api/quizzes', []);

	const refreshQuizzes = useCallback(async () => {
		setQuizzes(data)
	});

	useEffect(() => {
		refreshQuizzes()
	}, [refreshQuizzes])


	const createQuiz = useCallback(async ({ /* parameters waarmee je een quiz kan maken */ }) => {}, []);

	const deleteQuiz = useCallback(async (id /* ID van de quiz die verwijderd moet worden */) => {}, []);

	const value = useMemo(() => ({
		quizzes,
		setQuizzes,
		currentQuiz,
		setCurrentQuiz,
	}), [quizzes, currentQuiz, createQuiz, deleteQuiz, setCurrentQuiz]);

	return (
		<QuizContext.Provider value={value} >
			{children}
		</QuizContext.Provider>
	);
};
