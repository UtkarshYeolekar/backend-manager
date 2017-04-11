const startServer = require("./src/boot/backendServer.js");
const logger = require("./src/utils/logger");
let mongodb = require('mongodb'),
    connection = require('./src/boot/dbconnection.js'),
    MongoClient = mongodb.MongoClient;
let tennantDB = require('./src/boot/db-env').tennantDbConfig.database;
// Connect to the db
try{
    connection.getConnection()
    .then((conn) => {
    database = conn.db(tennantDB);
	 database.collection("__deployment").count(function (err, count) {
            if (err) throw err;
             logger.debug('Total Rows: ' + count);
            startServer();
        });
    });
}
catch(err)
{
     logger.debug("Error Occured"+err);
}

