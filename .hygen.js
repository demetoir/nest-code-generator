const shelljs = require('shelljs')
const libs = require('./libs')

module.exports = {
    templates: "./.hygen",
    helpers: {
        shelljs: shelljs,
        libs: libs,
        storage: {},
        root: "pickle"
    }
}