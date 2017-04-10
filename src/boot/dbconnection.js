let MongoClient = require('mongodb').MongoClient;
let databaseConfig = require('./config.js').cloudDatabaseConfig;
let tennantDbConfig = require('./db-env').tennantDbConfig;
const logger = require("../utils/logger");

let connection = null;


let getConnectionUrl = () => {
        let constr = null;

        if(databaseConfig.username && databaseConfig.password && databaseConfig.domain && databaseConfig.port)
            constr =  "mongodb://"+ databaseConfig.username +":"+ databaseConfig.password +"@"+ databaseConfig.domain +":"+ databaseConfig.port;

        if(constr && databaseConfig.authSource)
            constr += "/?authSource="+ databaseConfig.authSource;

        return constr;
    }

let getConnection = () => {
       
        if(connection === null) {
            let constr = getConnectionUrl();

 if(constr!=null) {
                return MongoClient.connect(constr)
                .then((conn) => {
                     logger.debug("Cloud Database Connection Established.")
                    connection = conn;
                    return Promise.resolve(conn);
                })
                .catch((err) => {
                     logger.debug("Cloud Database Connection Error.")
                    return Promise.reject("Database Connection Error.")
                })
            }
        }
}
module.exports = { getConnection }