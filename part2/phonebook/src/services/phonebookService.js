import axios from 'axios';

const serverUrl = 'http://localhost:3001/persons';

const getAll = () => {
    const request =  axios.get(`${serverUrl}`);
    return request.then(response => response.data);
};

const addNewPerson = (newPerson) => {
    return axios.post(`${serverUrl}`, newPerson)
        .then(response => response.data);
};

const updatePerson = (id, updatedPerson) => {
    return axios.put(`${serverUrl}/${id}`, updatedPerson)
        .then(response => response.data);
};

export default {
    getAll,
    addNewPerson,
    updatePerson
}