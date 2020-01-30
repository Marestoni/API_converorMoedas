import axios from 'axios';

const api = axios.create({
    baseURL:'https://free.currconv.com/api/v7'
})

export default api;

//BaseURL: https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=a6768c997429e8e0c3f7