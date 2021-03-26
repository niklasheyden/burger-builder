import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-ba2ee-default-rtdb.firebaseio.com/'
});

export default instance;
