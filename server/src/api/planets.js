'use strict';

const planetService = require('../modules/planets/planet.service');

module.exports.list = (event, context, callback) => {
    let planets = await planetService.fetchPlanetsDB();
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            data: planets,
            input: event
        })
    }

    callback(null, response);
};

module.exports.create = (event, context, callback) => {
    let newPlanet = req.body;
    let resService = await planetService.addPlanet(newPlanet);
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            data: resService,
            input: event
        })
    }

    callback(null, response);
}