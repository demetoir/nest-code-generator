const shelljs = require('shelljs')
const baseLoader = require('./base.loader')
const NameGenerator = require("./name-generator")

module.exports = (h, name) => {
    const {baseDir, spineCase, snakeCase, upperCase, camelCase} = baseLoader(h, name)
    const nameGenerator = new NameGenerator({baseDir, spineCase, snakeCase, upperCase, camelCase})

    shelljs.mkdir('-p', baseDir)
    shelljs.mkdir('-p', nameGenerator.decoratorsDir)

    shelljs.touch(nameGenerator.decoratorIndexFile)
    h.storage.decoratorIndexFile = nameGenerator.decoratorIndexFile

    h.storage.decoratorFile = nameGenerator.queryDecoratorFile

    h.storage.decoratorTestFile = nameGenerator.queryDecoratorTestFile

    shelljs.touch(nameGenerator.constantsFile)
    h.storage.constantFile = nameGenerator.constantsFile

    h.storage.decoratorImportFile = nameGenerator.queryDecoratorImportPath

    h.storage.decoratorName = nameGenerator.queryDecoratorName

    h.storage.queryName = nameGenerator.gqlQueryName
    h.storage.constantName = nameGenerator.queryConstantName
}



