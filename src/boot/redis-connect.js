module.exports = () => {

const redis = require('redis'),
        logger = require("../utils/logger"),
        env = require('./db-env').redisConfig;

logger.debug("Initalizing Redis Client");
let redisClient = redis.createClient({host : env.host, port : env.port });

redisClient.on('ready',function() {
 logger.debug("Redis is ready");
});

redisClient.on('connect',function(){
    logger.debug('connected to redis');
});

redisClient.on("error", function (err) {
    logger.debug("Error " + err);
});

redisClient.set("language","nodejs",function(err,reply) {
 logger.debug(err);
 logger.debug(reply);
});

redisClient.set("pod","redis",function(err,reply) {
 logger.debug(err);
 logger.debug(reply);
});

};