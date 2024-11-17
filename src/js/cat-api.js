import axios from "axios";


const API_KEY = 'live_u3ktIQTmvovq1zt7bdPihRsJgv32eeVtZ91qFzDcsv6klBvJOObMKwAHcrRZDBqD';
const URL = "https://api.thecatapi.com/v1";
axios.defaults.headers.common["x-api-key"] = API_KEY;
axios.defaults.baseURL = URL;


const fetchBreeds = () => {
    return axios.get('/breeds').then(({data}) => {
        return data
    }).catch((error) => {
        console.log(error);
    })
};

const fetchCatByBreed = (breedId) => {
    return axios.get(`/images/search?breed_ids=${breedId}`).then(({data}) => {
        return data;
    }).catch((error) => {
        console.log(error);
    })
}

  export {fetchBreeds, fetchCatByBreed}