import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-8d036.cloudfunctions.net/api'  // The API (cloud functions) URL
    // http://localhost:5001/clone-8d036/us-central1/api
});

export default instance;