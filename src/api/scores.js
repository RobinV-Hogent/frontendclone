import {
    axios
} from ".";



export const getAllItems = async () => {
    const data = await axios.get(`scores`).then(res => res.data.data);
    console.log(data)
    return data;
}

export const createScore = async ({
    quiz,
    user,
    score,
}) => {
    axios.post(`scores`, {
        quiz,
        user,
        score,
    });
}

export const deleteScoreById = async (id) => {
    await axios({
        method: "delete",
        url: `scores/score/${id.id}`,
    });
}

export const getScoreById = async (id) => {
    return await axios.get(`scores/score/id/${id}`).then(response => response.data).then(data => data[0]);
}

export const getScoresByUserId = async (id) => {
    const {
        data
    } = await axios.get(`scores/user/id/${id}`).then(res => res.data);
    return data;
}