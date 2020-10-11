---
inject: true
append: true
to: <%= h.storage.interfaceIndexFile %>
---
export * from './<%= h.storage.filePrefix %>.interface-type'