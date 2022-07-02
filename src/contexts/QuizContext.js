import React, {
  useState,
  createContext,
  useCallback,
  useMemo,
  useContext,
  useEffect,
} from "react";
import * as quizApi from "../api/quizzes.js";
import { useSession } from "./AuthProvider";

export const Quiz_Context = createContext();
export const useQuizzes = () => useContext(Quiz_Context);

export const Quizzes_Provider = ({ children }) => {
  const { ready: authReady } = useSession();
  const [quiz, setQuiz] = useState();
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [initialLoad, setInitialLoad] = useState(false);

  const fetchAll = useCallback(async () => {
    try {
      setError({});
      setLoading(true);
      const data = await quizApi.getAllQuizNames();
      setQuizzes(data.quizzes);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  const selectQuiz = useCallback(async (id) => {
    try {
      setError({});
      setLoading(true);
      const data = await quizApi.getQuizById(id);
      setQuiz(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authReady) {
      fetchAll();
      setInitialLoad(true);
    }
  }, [authReady, fetchAll]);

  const value = useMemo(
    () => ({
      quiz,
      setQuiz,
      quizzes,
      setQuizzes,
      loading,
      selectQuiz,
    }),
    [quiz, setQuiz, quizzes, setQuizzes, loading]
  );

  return (
    <Quiz_Context.Provider value={value}>{children}</Quiz_Context.Provider>
  );
};
