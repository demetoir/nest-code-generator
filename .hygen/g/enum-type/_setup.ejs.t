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
h.shelljs.mkdir('-p', baseDir + "/enums")

const decoratorIndexFile = baseDir + "/enums/index.ts"
h.shelljs.touch(decoratorIndexFile)
h.storage.decoratorIndexFile = decoratorIndexFile

const enumTypeFile = baseDir + '/enums' + "/" + filePrefix + ".enum.ts"
h.storage.enumTypeFile = enumTypeFile

const enumTypeTestFile = baseDir + '/enums' + "/" + filePrefix + ".enum.spec.ts"
h.storage.enumTypeTestFile = enumTypeTestFile

const constantFile = baseDir + "/constants.ts"
h.shelljs.touch(constantFile)
h.storage.constantFile = constantFile


const normalized = filePrefix.replace(/-/g, '_')
h.storage.normalized = normalized

const enumTypeName = h.inflection.camelize(normalized) + 'Enum'
h.storage.enumTypeName = enumTypeName

const constantName = 'GQL_ENUM_TYPE_'+  normalized.toUpperCase()
h.storage.constantName = constantName

const enumName = h.inflection.camelize(normalized) + "Enum"
h.storage.enumName = enumName
%>