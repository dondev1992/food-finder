import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer tsrBIEgG2Ui9MTPnj1j2F0CR7KshKMcUndbqKU0L7oDfRk8GAQt3afjKkP5T2yG4TGAdRa08FM00L4HaQOWiiQ-R-ZOGsZZYqJuhmSxr7Qj16A4Sl0-N3o0PQPPtX3Yx'
    }    
});