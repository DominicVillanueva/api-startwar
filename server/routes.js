const routes = require('express').Router();

const planetRoutes = require('./src/modules/planets/planet.routes');
const peopleRoutes = require('./src/modules/people/people.routes');

routes.use('/planets', planetRoutes);
routes.use('/people', peopleRoutes);

routes.get('/', (req, res) => {
    res.status(200).json({ mensaje: 'API TEST RUNNING' });
})


module.exports = routes;