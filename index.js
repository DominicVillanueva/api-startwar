const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

// External files
const routes = require('./server/routes');

// initialize
const app = express();
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: false,
    parameterLimit: 50000
}));

// ROUTES
app.use(routes);

// SERVER
app.listen(app.get('port'), (req, res) => {
    console.log("Server on port: ", `http://localhost:${app.get("port")}`);
})