//Requires
const { dir, log, logOk, logWarn, logError, cleanTerminal } = require('../extras/console');
const webUtils = require('./webUtils.js');
const context = 'WebServer:downloadLog';


/**
 * Returns the console log file
 * @param {object} res
 * @param {object} req
 */
module.exports = async function action(res, req) {
    let now = (new Date()/1000).toFixed();
    log(`[${req.connection.remoteAddress}][${req.session.auth.username}] Downloading console log file.`);
    return res.download(globals.fxRunner.config.logPath, `fxserver_${now}.log`);
};
