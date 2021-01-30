const instance = require('../../utils/confAxios');

async function fetchPeoples() {
    try {
        let peoples = await instance.get('people');
        return Promise.resolve(peoples.data.results);
    } catch (error) {
        return Promise.reject('fetchPeoples => ' + error);
    }
}

async function fetchPeopleById(id_people) {
    try {
        let people = await instance.get(`people/${id_people}/`);
        return Promise.resolve(people.data);
    } catch (error) {
        return Promise.reject('fetchPeopleById => ' + error);
    }
}

module.exports = {
    fetchPeoples,
    fetchPeopleById
}