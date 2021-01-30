const peopleService = require('./people.service');

/**
 * Obtener todos los personajes
 */
const getPeoples = (async(req, res) => {
    let peoples = await peopleService.fetchPeoples();
    res.json(peoples);
});

/**
 * Obtener un personaje por ID
 */
const getPeopleById = (async(req, res) => {
    const id_people = req.params.id;
    let people = await peopleService.fetchPeopleById(id_people);
    res.json(people);
})

module.exports = {
    getPeoples,
    getPeopleById
}