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

}