import axios from 'axios'
const baseUrl = 'http://localhost:3003/patient/'

const newPatient = (patient) => {
    const req = axios.post(baseUrl, patient);
    return req.then(res => res.data)
}

const patientList = () => {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

const singlePerson = (id) => {
    const req = axios.get(`${baseUrl}/${id}`);
    return req.then(res => res.data)
}

const removepatient = (id) => {
    const req = axios.delete(`${baseUrl}/${id}`);
    return req.then((res) => res.data);
};

const exports = { patientList, newPatient, removepatient, singlePerson };

// export default newPatient;
export default exports;
