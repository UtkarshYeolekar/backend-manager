'use strict';


const cloudDatabaseConfig = {
    port: 27017,
    domain: "35.185.63.253",
    username: "admin",
    password: "admin123",
    authSource: "admin"
}

const localDatabaseUrl = "mongodb://baasuser:paragyte123@35.185.63.253:27017/baas";
const k8config = { 
    domain: "http://localhost",
    port:"8000"
};
module.exports = {cloudDatabaseConfig, localDatabaseUrl,k8config}
