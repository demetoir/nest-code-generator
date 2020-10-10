---
---
<%
const path = name.split('/').reverse().slice(1).reverse().join('/')
const filePrefix = name.split('/').pop()
const baseDir = h.root + "/" + path;
h.storage.path = path
h.storage.filePrefix = filePrefix
h.storage.baseDir = baseDir

h.shelljs.mkdir('-p', baseDir)
h.shelljs.mkdir('-p', baseDir + "/decorators")

const decoratorIndexFile = baseDir + "/decorators/index.ts"
h.shelljs.touch(decoratorIndexFile)
h.storage.decoratorIndexFile = decoratorIndexFile


const decoratorFile = baseDir + '/decorators'+ "/" + filePrefix + "-mutation.decorator.ts"
h.storage.decoratorFile = decoratorFile

const decoratorTestFile = baseDir + '/decorators'+ "/" + filePrefix + "-mutation.decorator.spec.ts"
h.storage.decoratorTestFile = decoratorTestFile

const constantFile = baseDir + "/constants.ts"
h.shelljs.touch(constantFile)
h.storage.constantFile = constantFile


const decoratorImportFile = "./" + h.storage.filePrefix + "-mutation.decorator"
h.storage.decoratorImportFile = decoratorImportFile

const normalized = filePrefix.replace('-', '_')
h.storage.normalized = normalized

const decoratorName = h.inflection.camelize(normalized) + 'Mutation'
h.storage.decoratorName = decoratorName

const mutationName = h.inflection.camelize(normalized, true)
h.storage.mutationName = mutationName

const constantName = 'GQL_MUTATION_'+  normalized.toUpperCase()
h.storage.constantName = constantName

%>