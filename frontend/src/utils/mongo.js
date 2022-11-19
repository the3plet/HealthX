import axios from 'axios'
const baseUrl = 'http://localhost:3003/patient/'

const newPatient = (patient) => {
    const req = axios.post(baseUrl, patient);
    return req.then(res => res.data)
}

const getAllPatients= () => {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

const getPatient = (id) => {
    const req = axios.get(`${baseUrl}/${id}`);
    return req.then(res => res.data)
}

const removePatient = (id) => {
    const req = axios.delete(`${baseUrl}/${id}`);
    return req.then((res) => res.data);
};

const exports = { getAllPatients, newPatient,getPatient,removePatient };

// export default newPatient;
export default exports;
