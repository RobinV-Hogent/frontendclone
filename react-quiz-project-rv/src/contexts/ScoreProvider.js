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


//#endregion

export const ScoreContext = createContext();
export const useScore = () => useContext(ScoreContext);

export const ScoreProvider = ({ children }) => {
	const [score, setScore] = useState(0);

	const value = useMemo(() => ({
		score,
		setScore
	}), [score, setScore]);

	return (
		<ScoreContext.Provider value={value} >
			{children}
		</ScoreContext.Provider>
	);
};
