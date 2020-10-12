const shelljs = require('shelljs')
const baseLoader = require('./base.loader')
const NameGenerator = require('../name.builder')

module.exports = (h, name) => {
    const {baseDir, spineCase, snakeCase, upperCase, camelCase} = baseLoader(h, name)
    const nameGenerator = new NameGenerator({baseDir, spineCase, snakeCase, upperCase, camelCase})

    shelljs.mkdir('-p', baseDir)
    shelljs.mkdir('-p', nameGenerator.enumDir)

    shelljs.touch(nameGenerator.enumIndexFile)
    h.storage.decoratorIndexFile = nameGenerator.enumIndexFile
    h.storage.enumTypeFile = nameGenerator.enumTypeFile
    h.storage.enumTypeTestFile = nameGenerator.enumTypeTestFile

    shelljs.touch(nameGenerator.constantsFile)
    h.storage.constantFile = nameGenerator.constantsFile

    h.storage.enumTypeName = nameGenerator.enumName

    h.storage.constantName = nameGenerator.enumConstantName

    h.storage.enumName = nameGenerator.gqlEnumTypeName
}




