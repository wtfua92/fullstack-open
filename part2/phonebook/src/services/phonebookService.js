import axios from 'axios';

const serverUrl = '/api/persons';

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

const deletePerson = (id) => {
    return axios.delete(`${serverUrl}/${id}`)
        .then(response => response.data);
};

export default {
    getAll,
    addNewPerson,
    updatePerson,
    deletePerson
}