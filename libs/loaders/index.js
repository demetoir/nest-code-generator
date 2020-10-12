const inputTypeLoader = require('./input-type.loader')
const enumTypeLoader = require('./enum-type.loader')
const interfaceTypeLoader = require('./interface-type.loader')
const mutationDecoratorLoader = require('./mutation-decorator.loader')
const objectTypeLoader = require('./object-type.loader')
const queryDecoratorLoader = require('./query-decorator.loader')

module.exports = {
    inputTypeLoader: inputTypeLoader,
    enumTypeLoader: enumTypeLoader,
    interfaceTypeLoader: interfaceTypeLoader,
    mutationDecoratorLoader: mutationDecoratorLoader,
    objectTypeLoader: objectTypeLoader,
    queryDecoratorLoader: queryDecoratorLoader
}
