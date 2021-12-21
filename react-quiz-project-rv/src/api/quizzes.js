import {
    axios
} from ".";



export const getAllItems = async () => {
    const data = await axios.get(`quizzes`).then(res => res.data);
    return data;
}

export const createQuiz = async ({
    title,
    description,
    img,
    category
}) => {

    axios.post(`quizzes`, {
        title,
        description,
        img,
        category,
    });
}

export const deleteQuiz = async (id) => {
    await axios({
        method: "delete",
        url: `quizzes/quiz/${id}`,
    });
}

export const getQuizById = async (id) => {
    return await axios.get(`quizzes/quiz/id/${id}`).then(res => res.data).then(res => res.data);
}

export const getQuizByName = async (name) => {
    const data = await axios.get(`quizzes/quiz/name/${name}`);
    console.log(data);
    return data;
}

export const updateQuizById = async (id, {
    title,
    description,
    img,
    category
}) => {
    await axios.put(`quizzes/quiz/${id}`, {
        title,
        description,
        img,
        category
    });
}