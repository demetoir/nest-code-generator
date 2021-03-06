const shelljs = require('shelljs')
const baseLoader = require('./base.loader')
const NameGenerator = require('../name.builder')

module.exports = (h, name) => {
    const {baseDir, spineCase, snakeCase, upperCase, camelCase} = baseLoader(h, name)
    const nameGenerator = new NameGenerator({baseDir, spineCase, snakeCase, upperCase, camelCase})

    shelljs.mkdir('-p', baseDir)
    shelljs.mkdir('-p', nameGenerator.interfaceTypesDir)

    shelljs.touch(nameGenerator.interfaceTypeIndexFile)
    h.storage.interfaceIndexFile = nameGenerator.interfaceTypeIndexFile

    h.storage.interfaceTypeFile = nameGenerator.interfaceTypeFile

    h.storage.interfaceTypeTestFile = nameGenerator.interfaceTypeTestFile

    shelljs.touch(nameGenerator.constantsFile)
    h.storage.constantFile = nameGenerator.constantsFile

    h.storage.interfaceTypeName = nameGenerator.gqlInterfaceTypeName

    h.storage.constantName = nameGenerator.interfaceConstantName

    h.storage.interfaceClassName = nameGenerator.interfaceClassName
}



