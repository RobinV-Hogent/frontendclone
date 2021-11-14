import {
	createContext,
	useMemo,
	useState,
	useEffect,
	useContext,
	useCallback
} from 'react';

import { CATEGORY_DATA } from "../data/mock-data"


export const CategoryContext = createContext();
export const useCategories = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }) => {

	const [categories, setCategories] = useState([]);
	const [currentCategory, setCurrentCategory] = useState({});

	const refreshCategories = useCallback(async () => {
		setCategories(CATEGORY_DATA)
	}, []);

	useEffect(() => {
		refreshCategories();
	}, [refreshCategories]);

	const value = useMemo(() => ({
		categories,
		currentCategory,
	}), [categories]);

	return (
		<CategoryContext.Provider value={value} >
			{children}
		</CategoryContext.Provider>
	);
};
