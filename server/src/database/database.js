const mysql = require('mysql');
const { promisify } = require('util');


const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "bd_startwar"
});

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            console.log("DATABASE CONNECTION WAS CLOSED");
        }
        if (err.code === "ER_CON_COUNT_ERROR") {
            console.log("DATABASE HAS TO MANY CONNECTIONS");
        }
        if (err.code === "ECONNREFUSED") {
            console.log("DATABASE CONNECTION WAS REFUSED");
        }
    }

    if (connection) {
        connection.release();
        console.log("DB IS CONNECTED");
    }
})

//promisify pool query
pool.query = promisify(pool.query);
pool.getConnection = promisify(pool.getConnection).bind(pool);

module.exports = { pool };