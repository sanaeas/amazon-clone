import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-8d036/us-central1/api'  // The API (cloud functions) URL
});

export default instance;