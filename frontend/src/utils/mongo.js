import axios from 'axios'
const baseUrl = 'http://localhost:3003/patient/'

const newPatient = (patient) =>{
    const req = axios.post(baseUrl,patient);
    return req.then(res=>res.data)
}

export default newPatient;