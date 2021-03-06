/**
 * Logger middleware used as one of default middlewares by tooling
 *
 * @param {Object} argv logger arguments
 * @returns {Object} logger instance or null
 */
function init(argv) {
	if (!argv.verbose && !argv.loglevel) return null;

	const logger = require("@ui5/logger");
	if (argv.loglevel) {
		logger.setLevel(argv.loglevel);
	}
	if (argv.verbose) {
		logger.setLevel("verbose");
		logger.getLogger("cli:middlewares:base").verbose(`using node version ${process.version}`);
	}
	return logger;
}

module.exports = {init};
