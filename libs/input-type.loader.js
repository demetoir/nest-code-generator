const shelljs = require('shelljs')
const inflection = require('inflection');

module.exports = (h, name) => {
    const path = name.split('/').reverse().slice(1).reverse().join('/')
    const filePrefix = name.split('/').pop()
    const baseDir = `${h.root}/${path}`;
    h.storage.path = path
    h.storage.filePrefix = filePrefix
    h.storage.baseDir = baseDir

    shelljs.mkdir('-p', baseDir)
    shelljs.mkdir('-p', `${baseDir}/decorators`)
    shelljs.mkdir('-p', `${baseDir}/input-types`)

    const decoratorIndexFile = `${baseDir}/decorators/index.ts`
    shelljs.touch(decoratorIndexFile)
    h.storage.decoratorIndexFile = decoratorIndexFile


    const decoratorFile = `${baseDir}/decorators/${filePrefix}-input-type-args.decorator.ts`
    h.storage.decoratorFile = decoratorFile

    const decoratorTestFile = `${baseDir}/decorators/${filePrefix}-input-type-args.decorator.spec.ts`
    h.storage.decoratorTestFile = decoratorTestFile


    const inputTypeFile = `${baseDir}/input-types/${filePrefix}.input-type.ts`
    h.storage.inputTypeFile = inputTypeFile


    const inputTypeTestFile = `${baseDir}/input-types/${filePrefix}.input-type.spec.ts`
    h.storage.inputTypeTestFile = inputTypeTestFile

    const constantFile = `${baseDir}/constants.ts`
    shelljs.touch(constantFile)
    h.storage.constantFile = constantFile


    const decoratorImportFile = `./${filePrefix}-input-type-args.decorator`
    h.storage.decoratorImportFile = decoratorImportFile

    const normalized = filePrefix.replace(/-/g, '_')
    h.storage.normalized = normalized

    const decoratorName = `${inflection.camelize(normalized)}InputTypeArgs`
    h.storage.decoratorName = decoratorName

    const inputTypeName = inflection.camelize(normalized)
    h.storage.inputTypeName = `${inputTypeName}Input`

    const constantName = `GQL_INPUT_TYPE_${normalized.toUpperCase()}`
    h.storage.constantName = constantName

    const inputTypeClassName = inflection.camelize(normalized)
    h.storage.inputTypeClassName = `${inputTypeClassName}InputType`
}

