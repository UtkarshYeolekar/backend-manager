// Exporting DB-Config Object 
const logger = require("../utils/logger");

const tennantDbConfig = {
    port: process.env.CLOUD_MONGO_SERVICE_SERVICE_PORT,
    domain: process.env.CLOUD_MONGO_SERVICE_SERVICE_HOST,
    username: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
    database: process.env.MONGO_DATABASE
}

const dumpEnv = (port, ip, username, password, database)=>{
    logger.debug(`port: ${port}`);
    logger.debug(`Domain: ${ip}`);
    logger.debug(`DB UserName: ${username}`);
    logger.debug(`DB Password: ${password}`);
    logger.debug(`Database Name: ${database}`);
};

dumpEnv(tennantDbConfig.port,tennantDbConfig.domain,tennantDbConfig.username,tennantDbConfig.password,tennantDbConfig.database);

module.exports = {tennantDbConfig}