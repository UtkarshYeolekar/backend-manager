const startServer = require("./src/boot/backendServer.js"),
    logger = require("./src/utils/logger"),
    mongodb = require('mongodb'),
    connection = require('./src/boot/dbconnection.js'),
    MongoClient = mongodb.MongoClient,
    tennantDB = require('./src/boot/db-env').tennantDbConfig.database,
    redisClient = require('./src/boot/redis-connect.js');
// Connect to the db
try{
    connection.getConnection()
    .then((conn) => {
    database = conn.db(tennantDB);
	 database.collection("__deployment").count(function (err, count) {
            if (err) throw err;
             logger.debug('Total Rows: ' + count);
            startServer();
            redisClient();
        });
    })
     .catch((err) => {
                     logger.debug("Error in connecting to the tennantDB");
                     logger.debug(err);
    });
}
catch(err)
{
     logger.debug("Error Occured"+err);
}

