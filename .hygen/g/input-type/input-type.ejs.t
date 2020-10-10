---
to: <%= h.storage.inputTypeFile %>
---
import { InputType } from '@nestjs/graphql';
import { <%= h.storage.constantName %>} from '../constants'

@InputType(<%= h.storage.constantName %>)
export class <%= h.storage.inputTypeClassName%> {}

