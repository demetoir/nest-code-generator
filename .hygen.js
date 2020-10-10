const shelljs = require('shelljs')

module.exports = {
    templates: "./.hygen",
    helpers: {
        shelljs: shelljs,
        storage: {},
        root: "/src"
    }
}