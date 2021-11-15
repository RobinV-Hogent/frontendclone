//#region imports
import {
	createContext,
	useMemo,
	useState,
	useEffect,
	useContext,
	useCallback
} from 'react';
import axios from 'axios';
import { QUESTIONS_DATA } from "../data/mock-data"
//#endregion

export const QuestionContext = createContext();
export const useQuestions = () => useContext(QuestionContext);

export const QuestionProvider = ({ children }) => {

	const [questions, setQuestions] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState({});

	const refreshQuestions = useCallback(async () => {
		setQuestions(QUESTIONS_DATA)
	}, []);

	useEffect(() => {
		refreshQuestions();
	}, [refreshQuestions]);

	const value = useMemo(() => ({
		questions,
		setQuestions,
		currentQuestion,
		setCurrentQuestion
	}), [questions,	setQuestions, currentQuestion, setCurrentQuestion]);

	return (
		<QuestionContext.Provider value={value} >
			{children}
		</QuestionContext.Provider>
	);
};
