const inflection = require('inflection');

module.exports = class NameGenerator {
    constructor({baseDir, spineCase, snakeCase, upperCase, camelCase}) {
        this.spineCase = spineCase
        this.snakeCase = snakeCase
        this.upperCase = upperCase
        this.camelCase = camelCase
        this.baseDir = baseDir
    }

    get enumName() {
        return `${this.camelCase}Enum`
    }

    get enumIndexFile() {
        return `${this.baseDir}/enums/index.ts`
    }

    get enumTypeFile() {
        return `${this.baseDir}/enums/${this.spineCase}.enum.ts`
    }

    get enumTypeTestFile() {
        return `${this.baseDir}/enums/${this.spineCase}.enum.spec.ts`
    }

    get enumDir() {
        return `${this.baseDir}/enums`
    }

    get enumConstantName() {
        return `GQL_ENUM_TYPE_${this.upperCase}`
    }

    get gqlEnumTypeName() {
        return `${this.camelCase}Enum`
    }

    get constantsFile() {
        return `${this.baseDir}/constants.ts`
    }

    get decoratorsDir() {
        return `${this.baseDir}/decorators`
    }

    get inputTypesDir() {
        return `${this.baseDir}/input-types`
    }

    get inputTypeIndexFile(){
        return `${this.baseDir}/input-types/index.ts`
    }

    get decoratorIndexFile() {
        return `${this.baseDir}/decorators/index.ts`
    }

    get inputTypeArgDecoratorFile() {
        return `${this.baseDir}/decorators/${this.spineCase}-input-type-args.decorator.ts`
    }

    get inputTypeArgDecoratorTestFile() {
        return `${this.baseDir}/decorators/${this.spineCase}-input-type-args.decorator.spec.ts`
    }

    get inputTypeFile() {
        return `${this.baseDir}/input-types/${this.spineCase}.input-type.ts`
    }

    get inputTypeTestFile() {
        return `${this.baseDir}/input-types/${this.spineCase}.input-type.spec.ts`
    }

    get inputTypeArgDecoratorImportPath() {
        return `./${this.spineCase}-input-type-args.decorator`
    }

    get inputTypeArgDecoratorName() {
        return `${this.camelCase}InputTypeArgs`
    }

    get gqlInputTypeName() {
        return `${this.camelCase}Input`
    }

    get inputTypeConstantName() {
        return `GQL_INPUT_TYPE_${this.upperCase}`
    }

    get inputTypeClassName() {
        return `${this.camelCase}InputType`
    }

    get interfaceTypeIndexFile(){
        return `${this.baseDir}/interface-types/index.ts`
    }

    get interfaceTypesDir() {
        return `${this.baseDir}/interface-types`
    }

    get interfaceTypeFile() {
        return `${this.baseDir}/interface-types/${this.spineCase}.interface-type.ts`
    }

    get interfaceTypeTestFile() {
        return `${this.baseDir}/interface-types/${this.spineCase}.interface-type.spec.ts`
    }

    get gqlInterfaceTypeName() {
        return `${this.camelCase}Interface`
    }

    get interfaceConstantName() {
        return `GQL_INTERFACE_TYPE_${this.upperCase}`
    }

    get interfaceClassName() {
        return `${this.camelCase}InterfaceType`
    }

    get mutationDecoratorFile() {
        return `${this.baseDir}/decorators/${this.spineCase}-mutation.decorator.ts`
    }

    get mutationDecoratorTestFile() {
        return `${this.baseDir}/decorators/${this.spineCase}-mutation.decorator.spec.ts`
    }

    get mutationDecoratorImportFile() {
        return `./${this.spineCase}-mutation.decorator`
    }

    get mutationDecoratorName() {
        return `${this.camelCase}Mutation`
    }

    get gqlMutationName() {
        return inflection.camelize(this.camelCase, true)
    }

    get mutationConstantName() {
        return `GQL_MUTATION_${this.upperCase}`
    }

    get objectTypeDir() {
        return `${this.baseDir}/object-types`
    }

    get objectTypeFile() {
        return `${this.baseDir}/object-types/${this.spineCase}.object-type.ts`
    }

    get objectTypeTestFile() {
        return `${this.baseDir}/object-types/${this.spineCase}.object-type.spec.ts`
    }

    get objectTypeFactoryFile() {
        return `${this.baseDir}/object-types/${this.spineCase}.object-type.factory.ts`
    }

    get objectTypeFactoryTestFile() {
        return `${this.baseDir}/object-types/${this.spineCase}.object-type.factory.spec.ts`
    }

    get gqlObjectTypeName() {
        return this.camelCase
    }

    get objectTypeConstantName() {
        return `GQL_OBJECT_TYPE_${this.snakeCase.toUpperCase()}`
    }

    get objectTypeClassName() {
        return `${this.camelCase}ObjectType`
    }

    get objectTypeIndexFile(){
        return `${this.baseDir}/object-types/index.ts`
    }

    get inputTypeFactoryFile(){
        return `${this.baseDir}/input-types/${this.spineCase}.input-type.factory.ts`
    }

    get inputTypeFactoryTestFile(){
        return `${this.baseDir}/input-types/${this.spineCase}.input-type.factory.spec.ts`
    }

    get queryDecoratorFile() {
        return `${this.baseDir}/decorators/${this.spineCase}-query.decorator.ts`
    }

    get queryDecoratorTestFile() {
        return `${this.baseDir}/decorators/${this.spineCase}-query.decorator.spec.ts`
    }

    get queryDecoratorImportPath() {
        return `./${this.spineCase}-query.decorator`
    }

    get queryDecoratorName() {
        return `${this.camelCase}Query`
    }

    get gqlQueryName() {
        return inflection.camelize(this.snakeCase, true)
    }

    get queryConstantName() {
        return `GQL_QUERY_${this.upperCase}`
    }

}


