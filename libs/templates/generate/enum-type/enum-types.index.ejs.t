---
inject: true
append: true
to: <%= h.storage.decoratorIndexFile %>
---
export * from './<%= h.storage.filePrefix %>.enum-type'