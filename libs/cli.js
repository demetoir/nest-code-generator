const {runner} = require('hygen')
const path = require('path')
const defaultTemplates = path.join(__dirname, 'templates')
const libs = require('.')


// https://github.com/jondot/hygen/issues/253
// https://github.com/jondot/hygen/pull/248
const chalk = require('chalk');

const yellow = chalk.yellow,
    red = chalk.red,
    green = chalk.green,
    magenta = chalk.magenta;

const template = require('chalk/source/templates');

class Logger {
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


runner(process.argv.slice(2), {
    templates: defaultTemplates,
    cwd: process.cwd(),
    logger: new Logger(console.log.bind(console)),
    createPrompter: () => require('enquirer'),
    exec: (action, body) => {
        const opts = body && body.length > 0 ? {input: body} : {}
        return require('execa').shell(action, opts)
    },
    helpers: {
        root: "src",
        libs: libs,
        storage: {},
    },
    debug: !!process.env.DEBUG
})