const Joi = require('joi');

const planetSchema = Joi.object({
    nombre: Joi.string().required(),
    clima: Joi.string().required(),
    diametro: Joi.string().required(),
    gravedad: Joi.string().required(),
    periodo_orbital: Joi.string().required(),
    poblacion: Joi.string().required(),
    periodo_rotacion: Joi.string().required(),
    agua_superficie: Joi.string().required(),
    terreno: Joi.string().required(),
});

const validatePlanet = (req, res, next) => {
    const validation = planetSchema.validate(req.body);
    if (validation.error) {
        return res.status(403).send({
            message: `Error en la validación del servicio planeta: ${ req.body }`
        })
    }

    next();
}

module.exports = { validatePlanet };