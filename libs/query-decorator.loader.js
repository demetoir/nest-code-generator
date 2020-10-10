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

    const decoratorIndexFile = `${baseDir}/decorators/index.ts`
    shelljs.touch(decoratorIndexFile)
    h.storage.decoratorIndexFile = decoratorIndexFile

    const decoratorFile = `${baseDir}/decorators/${filePrefix}-query.decorator.ts`
    h.storage.decoratorFile = decoratorFile

    const decoratorTestFile = `${baseDir}/decorators/${filePrefix}-query.decorator.spec.ts`
    h.storage.decoratorTestFile = decoratorTestFile

    const constantFile = `${baseDir}/constants.ts`
    shelljs.touch(constantFile)
    h.storage.constantFile = constantFile

    const decoratorImportFile = `./${filePrefix}-query.decorator`
    h.storage.decoratorImportFile = decoratorImportFile

    const normalized = filePrefix.replace(/-/g, '_')
    h.storage.normalized = normalized

    const decoratorName = `${inflection.camelize(normalized)}Query`
    h.storage.decoratorName = decoratorName

    const queryName = h.inflection.camelize(normalized, true)
    h.storage.queryName = queryName

    const constantName = `GQL_QUERY_${normalized.toUpperCase()}`
    h.storage.constantName = constantName
}



