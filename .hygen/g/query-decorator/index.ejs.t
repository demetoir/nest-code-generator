---
inject: true
append: true
to: <%= h.storage.decoratorIndexFile %>
---
export * from './<%= h.storage.filePrefix %>-query.decorator'