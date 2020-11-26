import axios from "axios";

const instance = axios.create({
    //THE API (cloud function) URL
    baseURL: 'https://us-central1-challenge-f55b5.cloudfunctions.net/api'
    // 'http://localhost:5001/challenge-f55b5/us-central1/api'
});

export default instance;