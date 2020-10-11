---
inject: true
append: true
to: <%= h.storage.objectTypeIndexFile %>
---
export * from './<%= h.storage.filePrefix %>.object-type'