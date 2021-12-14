import axios from "axios";
import config from '../config.json'

export const getAllItems = async () => {
    return await axios.get(`${config.base_url}questions`).then(response => response.data);
}

export const getQuestionsByQuizId = async (id) => {
    return await axios.get(`${config.base_url}questions/quiz/${id}`).then(response => response.data);
}