import axios from 'axios';
const API_KEY = '0e4aa9bbc5b54d6394f110728223004';

const weatherAPI = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
});

const getWeather = async (query) => {
    const data = await weatherAPI
        .get(`/current.json?key=${API_KEY}&q=${query}`)
        .then((res) => res.data);

    return data;
};
export default getWeather;
