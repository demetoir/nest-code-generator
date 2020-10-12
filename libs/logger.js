// https://github.com/jondot/hygen/issues/253
// https://github.com/jondot/hygen/pull/248
const chalk = require('chalk');
const template = require('chalk/source/templates');
const yellow = chalk.yellow
const red = chalk.red
const green = chalk.green
const magenta = chalk.magenta

module.exports.Logger = class Logger {
    constructor(log) {
        this.log = log;
    }

    colorful(msg) {
        this.log(template(chalk, msg));
    }

    notice(msg) {
        this.log(magenta(msg));
    }

    warn(msg) {
        this.log(yellow(msg));
    }

    err(msg) {
        this.log(red(msg));
    }

    ok(msg) {
        this.log(green(msg));
    }

}
