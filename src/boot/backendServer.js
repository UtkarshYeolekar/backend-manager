module.exports = () => {
  const logger = require("../utils/logger"),
  express = require('express'),
  app = express();

  logger.debug("Starting backend...");

  app.get('/', function (req, res) {
    res.send('Hello World!')
  });

  app.get('/crash', function (req, res) {
    res.send('Crashing the comtainer!');
    process.nextTick(function () {
      throw new Error("CRASH!");
    });
  });

  app.listen(8080, function () {
    logger.debug('Example backend listening on port 8080!');
  });
};