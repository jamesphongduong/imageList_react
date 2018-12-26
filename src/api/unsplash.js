import axios from 'axios';

//creates instance of axios with default properties
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID 484ef053e55a75b6c3a6d3fa8f985200296d0aba0094aa1ce476de2fe05eabf6'
    }
});