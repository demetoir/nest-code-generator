---
to: <%= h.storage.interfaceTypeFile %>
---
import { InterfaceType } from '@nestjs/graphql';
import { <%= h.storage.constantName %> } from "../constants"

@InterfaceType(<%= h.storage.constantName %>)
export abstract class <%= h.storage.interfaceClassName %> {}
