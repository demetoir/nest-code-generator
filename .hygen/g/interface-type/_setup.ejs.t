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
h.shelljs.mkdir('-p', baseDir + "/interface-types")


const interfaceTypeFile = baseDir + '/interface-types' + "/" + filePrefix + ".interface-type.ts"
h.storage.interfaceTypeFile = interfaceTypeFile

const interfaceTypeTestFile = baseDir + '/interface-types' + "/" + filePrefix + ".interface-type.spec.ts"
h.storage.interfaceTypeTestFile = interfaceTypeTestFile

const constantFile = baseDir + "/constants.ts"
h.shelljs.touch(constantFile)
h.storage.constantFile = constantFile


const decoratorImportFile = "./" + h.storage.filePrefix + "-interface-type-args.decorator"
h.storage.decoratorImportFile = decoratorImportFile

const normalized = filePrefix.replace(/-/g, '_')
h.storage.normalized = normalized

const decoratorName = h.inflection.camelize(normalized) + 'InputTypeArgs'
h.storage.decoratorName = decoratorName

const interfaceTypeName = h.inflection.camelize(normalized)
h.storage.interfaceTypeName = interfaceTypeName + 'Interface'

const constantName = 'GQL_INTERFACE_TYPE_'+  normalized.toUpperCase()
h.storage.constantName = constantName

const interfaceClassName = h.inflection.camelize(normalized)
h.storage.interfaceClassName = interfaceClassName + "InterfaceType"

%>