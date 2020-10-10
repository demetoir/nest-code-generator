---
to: <%= h.storage.objectTypeFile %>
---
import { ObjectType } from '@nestjs/graphql';
import { <%= h.storage.constantName %> } from '../constants'

@ObjectType(<%= h.storage.constantName %>, {
	implements: []
})
export class <%= h.storage.objectTypeClassName %> {}


