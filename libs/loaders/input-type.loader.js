const shelljs = require('shelljs')
const baseLoader = require('./base.loader')
const NameGenerator = require("./name-generator")

module.exports = (h, name) => {
    const {baseDir, spineCase, snakeCase, upperCase, camelCase} = baseLoader(h, name)
    const nameGenerator = new NameGenerator({baseDir, spineCase, snakeCase, upperCase, camelCase})

    shelljs.mkdir('-p', baseDir)
    shelljs.mkdir('-p', nameGenerator.decoratorsDir)
    shelljs.mkdir('-p', nameGenerator.inputTypesDir)

    shelljs.touch(nameGenerator.inputTypeIndexFile)
    h.storage.inputTypeIndexFile = nameGenerator.inputTypeIndexFile

    shelljs.touch(nameGenerator.decoratorIndexFile)
    h.storage.decoratorIndexFile = nameGenerator.decoratorIndexFile

    h.storage.decoratorFile = nameGenerator.inputTypeArgDecoratorFile

    h.storage.decoratorTestFile = nameGenerator.inputTypeArgDecoratorTestFile

    h.storage.inputTypeFile = nameGenerator.inputTypeFile

    h.storage.inputTypeTestFile = nameGenerator.inputTypeTestFile

    shelljs.touch(nameGenerator.constantsFile)
    h.storage.constantFile = nameGenerator.constantsFile

    h.storage.decoratorImportFile = nameGenerator.inputTypeArgDecoratorImportPath

    h.storage.decoratorName = nameGenerator.inputTypeArgDecoratorName

    h.storage.inputTypeName = nameGenerator.gqlInputTypeName

    h.storage.constantName = nameGenerator.inputTypeConstantName

    h.storage.inputTypeClassName = nameGenerator.inputTypeClassName

    h.storage.inputTypeFactoryFile = nameGenerator.inputTypeFactoryFile
    h.storage.inputTypeFactoryTestFile = nameGenerator.inputTypeFactoryTestFile
}

