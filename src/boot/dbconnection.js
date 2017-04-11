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

let getTennantDBConnectionUrl = () =>{
    let constr = null;

    if(tennantDbConfig.username && tennantDbConfig.password && tennantDbConfig.domain && tennantDbConfig.port)
            constr =  "mongodb://"+ tennantDbConfig.username +":"+ tennantDbConfig.password +"@"+ tennantDbConfig.domain +":"+ tennantDbConfig.port;

        if(constr && tennantDbConfig.authSource)
            constr += "/?authSource="+ tennantDbConfig.authSource;

        return constr;
    

}

let getConnection = () => {
       
        if(connection === null) {
            let constr = getTennantDBConnectionUrl();

 if(constr!=null) {
                return MongoClient.connect(constr)
                .then((conn) => {
                     logger.debug("Tennant Database Connection Established.")
                    connection = conn;
                    return Promise.resolve(conn);
                })
                .catch((err) => {
                     logger.debug("Tennat Database Connection Error.")
                    return Promise.reject("Database Connection Error.")
                })
            }
        }
}
module.exports = { getConnection }