const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://swapi.py4e.com/api/',
});

module.exports = instance;