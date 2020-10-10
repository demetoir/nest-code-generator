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
h.shelljs.mkdir('-p', baseDir + "/object-types")


const objectTypeFile = baseDir + '/object-types' + "/" + filePrefix + ".object-type.ts"
h.storage.objectTypeFile = objectTypeFile

const objectTypeTestFile = baseDir + '/object-types' + "/" + filePrefix + ".object-type.spec.ts"
h.storage.objectTypeTestFile = objectTypeTestFile

const objectTypeFactoryFile = baseDir + '/object-types' + "/" + filePrefix + ".object-type.factory.ts"
h.storage.objectTypeFactoryFile = objectTypeFactoryFile

const objectTypeFactoryTestFile = baseDir + '/object-types' + "/" + filePrefix + ".object-type.factory.spec.ts"
h.storage.objectTypeFactoryTestFile = objectTypeFactoryTestFile


const constantFile = baseDir + "/constants.ts"
h.shelljs.touch(constantFile)
h.storage.constantFile = constantFile

const normalized = filePrefix.replace('-', '_')
h.storage.normalized = normalized

const objectTypeName = h.inflection.camelize(normalized)
h.storage.objectTypeName = objectTypeName

const constantName = 'GQL_OBJECT_TYPE_'+  normalized.toUpperCase()
h.storage.constantName = constantName

const objectTypeClassName = h.inflection.camelize(normalized)
h.storage.objectTypeClassName = objectTypeClassName + "ObjectType"

%>