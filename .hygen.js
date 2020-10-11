const shelljs = require('shelljs')
const libs = require('./libs')

module.exports = {
    templates: "./libs/templates",
    helpers: {
        shelljs: shelljs,
        libs: libs,
        storage: {},
        root: "src"
    }
}