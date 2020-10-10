const shelljs = require('shelljs')
const baseLoader = require('./base.loader')


module.exports = (h, name) => {
    const {baseDir, spineCase, snakeCase, upperCase, camelCase} = baseLoader(h, name)

    shelljs.mkdir('-p', baseDir)
    shelljs.mkdir('-p', `${baseDir}/enums`)

    const decoratorIndexFile = `${baseDir}/enums/index.ts`
    shelljs.touch(decoratorIndexFile)
    h.storage.decoratorIndexFile = decoratorIndexFile

    const enumTypeFile = `${baseDir}/enums/${spineCase}.enum.ts`
    h.storage.enumTypeFile = enumTypeFile

    const enumTypeTestFile = `${baseDir}/enums/${spineCase}.enum.spec.ts`
    h.storage.enumTypeTestFile = enumTypeTestFile

    const constantFile = `${baseDir}/constants.ts`
    shelljs.touch(constantFile)
    h.storage.constantFile = constantFile

    const enumTypeName = `${camelCase}Enum`
    h.storage.enumTypeName = enumTypeName

    const constantName = `GQL_ENUM_TYPE_${upperCase}`
    h.storage.constantName = constantName

    const enumName = `${camelCase}Enum`
    h.storage.enumName = enumName
}



