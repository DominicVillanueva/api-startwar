const planetService = require('./planet.service');

/**
 * Crea un nuevo planeta en la tabla PLANETA
 */
const postAddPlanet = (async(req, res) => {
    let newPlanet = req.body;
    let resService = await planetService.addPlanet(newPlanet);
    res.json({
        message: resService
    });
});

/**
 * Obtener todos los planetas de la BD
 */
const getPlanetsDB = (async(req, res) => {
    let planets = await planetService.fetchPlanetsDB();
    res.json(planets);
})

/**
 * Obtener todos los planetas
 */
const getPlanets = (async(req, res) => {
    let planets = await planetService.fetchPlanets();
    res.json(planets);
});

/**
 * Obtener un planeta por ID
 */
const getPlanetById = (async(req, res) => {
    const id_planet = req.params.id;
    let planet = await planetService.fetchPlanetsById(id_planet);
    res.json(planet);
})

module.exports = {
    getPlanets,
    getPlanetById,
    postAddPlanet,
    getPlanetsDB
}