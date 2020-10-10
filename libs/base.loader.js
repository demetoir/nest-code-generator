module.exports = (h, name) => {
    const path = name.split('/').reverse().slice(1).reverse().join('/')
    const spineCase = name.split('/').pop()
    const baseDir = `${h.root}/${path}`;
    const snakeCase = spineCase.replace(/-/g, '_')
    const camelCase = h.inflection.camelize(snakeCase)
    const upperCase = snakeCase.toUpperCase()
    const lowFirstCamelCase = h.inflection.camelize(snakeCase, true)

    h.storage.filePrefix = spineCase
    h.storage.baseDir = baseDir
    h.storage.normalized = snakeCase

    return {baseDir, spineCase, snakeCase, camelCase, upperCase, lowFirstCamelCase}
}
