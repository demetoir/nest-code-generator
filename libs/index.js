const inputTypeLoader = require('./loaders/input-type.loader')
const enumTypeLoader = require('./loaders/enum-type.loader')
const interfaceTypeLoader = require('./loaders/interface-type.loader')
const mutationDecoratorLoader = require('./loaders/mutation-decorator.loader')
const objectTypeLoader = require('./loaders/object-type.loader')
const queryDecoratorLoader = require('./loaders/query-decorator.loader')

module.exports = {
    inputTypeLoader: inputTypeLoader,
    enumTypeLoader: enumTypeLoader,
    interfaceTypeLoader: interfaceTypeLoader,
    mutationDecoratorLoader: mutationDecoratorLoader,
    objectTypeLoader: objectTypeLoader,
    queryDecoratorLoader: queryDecoratorLoader
}
