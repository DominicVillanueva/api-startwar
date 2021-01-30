const router = require('express').Router();
const planetController = require('./planet.controller');
const { validatePlanet } = require('./planet.validate');

/**
 * @api {post} /
 * @description
 * Añadir un nuevo planeta en la BD.
 * @group planets
 * @test http://localhost:3000/planets/
 */
router.post('/', validatePlanet, planetController.postAddPlanet);

/**
 * @api {get} /
 * @description
 * Obtener todos los planetas de la BD
 * @group planets
 * @test http://localhost:3000/planets/db/
 */
router.get('/db/', planetController.getPlanetsDB);

/**
 * @api {get} https://swapi.py4e.com/api/planets/
 * @description
 * Obtener todos los planetas desde la API.
 * @group planets
 * @test http://localhost:3000/planets/
 */
router.get('/', planetController.getPlanets);

/**
 * @api {get} https://swapi.py4e.com/api/planets/:id
 * @param id = id_planeta
 * @description
 * Obtiene un planeta en especifico desde la API.
 * @group planets
 * @test http://localhost:3000/planets/1
 */
router.get('/:id', planetController.getPlanetById);

module.exports = router;