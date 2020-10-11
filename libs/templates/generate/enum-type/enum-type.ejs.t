---
to: <%= h.storage.enumTypeFile %>
---
import { registerEnumType } from '@nestjs/graphql';
import { <%= h.storage.constantName %> } from '../constants'

export enum <%= h.storage.enumName %> {}

registerEnumType(<%= h.storage.enumName %>, { name: <%= h.storage.constantName %> });
