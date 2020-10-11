---
to: <%= h.storage.decoratorFile %>
---
import { Mutation, MutationOptions } from '@nestjs/graphql';
import { <%= h.storage.constantName %> } from '../constants';

export function <%= h.storage.decoratorName %>(options?: MutationOptions): MethodDecorator {
	return Mutation(() => null, { name: <%= h.storage.constantName %>, ...options });
}

