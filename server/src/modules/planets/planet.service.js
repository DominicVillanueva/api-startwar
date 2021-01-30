const instance = require('../../utils/confAxios');
const { pool } = require('../../database/database');


async function addPlanet(newPlanet) {
    try {
        const { nombre, clima, diametro, gravedad, periodo_orbital, poblacion, periodo_rotacion, agua_superficie, terreno } = newPlanet;
        const query = "call sp_insert_planet(?,?,?,?,?,?,?,?,?)";
        let resultDB = "";
        const responseDB = await pool.query(query, [nombre, clima, diametro, gravedad, periodo_orbital, poblacion, periodo_rotacion, agua_superficie, terreno]);
        if (responseDB[0][0].result == 1) {
            resultDB = 'Planeta registrado correctamente';
        } else {
            resultDB = 'Planeta ya registrado';
        }

        return Promise.resolve(resultDB);
    } catch (error) {
        return Promise.reject(error);
    }
}

async function fetchPlanetsDB() {
    try {
        const query = "call sp_get_all_planets()";
        let planets = await pool.query(query);
        return Promise.resolve(planets[0]);
    } catch (error) {
        return Promise.reject('fetchPlanetsDB => ' + error);
    }
}

async function fetchPlanets() {
    try {
        let planets = await instance.get('planets');
        return Promise.resolve(planets.data.results);
    } catch (error) {
        return Promise.reject('fetchPlanets => ' + error);
    }
}

async function fetchPlanetsById(id_planet) {
    try {
        let planet = await instance.get(`planets/${id_planet}/`);
        return Promise.resolve(planet.data);
    } catch (error) {
        return Promise.reject('fetchPlanetsById => ' + error);
    }
}

module.exports = {
    fetchPlanets,
    fetchPlanetsById,
    addPlanet,
    fetchPlanetsDB
}