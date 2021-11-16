import {
	createContext,
	useMemo,
	useState,
	useEffect,
	useContext,
	useCallback
} from 'react';
import axios from 'axios';
import { QUIZ_DATA } from "../data/mock-data"


export const QuizContext = createContext();
export const useQuizzes = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {

	const [quizzes, setQuizzes] = useState([]);
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);
	const [currentQuiz, setCurrentQuiz] = useState({});

	const refreshQuizzes = useCallback(async () => {
		try {
			setError();
			setLoading(true);
			setQuizzes(QUIZ_DATA)
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		refreshQuizzes();
		console.log('%c QuizProvider: refreshQuizzes was called', 'color: orange')
	}, [refreshQuizzes]);


	useEffect(() => {
		console.log(`currentQuiz has changed to: ${currentQuiz.title}`)
	}, [currentQuiz])



	const createQuiz = useCallback(async ({ /* parameters waarmee je een quiz kan maken */ }) => {}, []);

	const deleteQuiz = useCallback(async (id /* ID van de quiz die verwijderd moet worden */) => {}, []);

	const value = useMemo(() => ({
		quizzes,
		error,
		loading,
		currentQuiz,
		setCurrentQuiz,
	}), [quizzes, error, loading, currentQuiz, createQuiz, deleteQuiz, setCurrentQuiz]);

	return (
		<QuizContext.Provider value={value} >
			{children}
		</QuizContext.Provider>
	);
};
