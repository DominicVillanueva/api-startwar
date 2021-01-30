const router = require('express').Router();
const peopleController = require('./people.controller');

/**
 * @api {get} https://swapi.py4e.com/api/people/
 * @description
 * Obtener todos los personajes.
 * @group people
 */
router.get('/', peopleController.getPeoples);

/**
 * @api {get} https://swapi.py4e.com/api/people/:id
 * @param id = id_people
 * @description
 * Obtiene un personaje en especifico.
 * @group people
 */
router.get('/:id', peopleController.getPeopleById);

module.exports = router;