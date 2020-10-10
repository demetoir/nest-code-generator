---
to: <%= h.storage.decoratorFile %>
---
import { Query, QueryOptions } from '@nestjs/graphql';
import { <%= h.storage.constantName %> } from '../constants';

export function <%= h.storage.decoratorName %>(options?: QueryOptions): MethodDecorator {
	return Query(() => null, { name: <%= h.storage.constantName %>, ...options });
}

