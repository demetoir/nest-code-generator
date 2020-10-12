const {runner} = require('hygen')
const path = require('path')
const defaultTemplates = path.join(__dirname, 'templates')
const libs = require('.')
const {Logger} = require('./logger')


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