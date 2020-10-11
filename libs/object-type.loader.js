const shelljs = require('shelljs')
const baseLoader = require('./base.loader')
const NameGenerator = require("./name-generator")

module.exports = (h, name) => {
    const {baseDir, spineCase, snakeCase, upperCase, camelCase} = baseLoader(h, name)
    const nameGenerator = new NameGenerator({baseDir, spineCase, snakeCase, upperCase, camelCase})

    shelljs.mkdir('-p', baseDir)
    shelljs.mkdir('-p', nameGenerator.objectTypeDir)

    h.storage.objectTypeFile = nameGenerator.objectTypeFile

    h.storage.objectTypeTestFile = nameGenerator.objectTypeTestFile

    h.storage.objectTypeFactoryFile = nameGenerator.objectTypeFactoryFile

    h.storage.objectTypeFactoryTestFile = nameGenerator.objectTypeFactoryTestFile

    shelljs.touch(nameGenerator.constantsFile)
    h.storage.constantFile = nameGenerator.constantsFile

    h.storage.objectTypeName = nameGenerator.gqlObjectTypeName

    h.storage.constantName = nameGenerator.objectTypeConstantName

    h.storage.objectTypeClassName = nameGenerator.objectTypeClassName

}



