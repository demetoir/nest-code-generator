---
to: <%= h.storage.decoratorFile %>
---
import { Args, ArgsOptions } from '@nestjs/graphql';
import { <%= h.storage.inputTypeClassName %> } from '../input-types/<%= h.storage.filePrefix%>.input-type';

export function <%= h.storage.decoratorName %>(options?: ArgsOptions): ParameterDecorator {
	return Args('input', {
		type: () => <%= h.storage.inputTypeClassName %>, ...options
	});
}
