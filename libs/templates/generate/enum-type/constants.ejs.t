---
inject: true
append: true
to: <%= h.storage.constantFile %>
---
export const <%= h.storage.constantName %> = '<%= h.storage.enumTypeName %>';