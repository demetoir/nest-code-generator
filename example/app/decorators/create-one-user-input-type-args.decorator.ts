import { Args, ArgsOptions } from '@nestjs/graphql';
import { CreateOne-userInputType } from '../input-types/create-one-user.input-type';

export function CreateOne-userInputTypeArgs(options?: ArgsOptions): ParameterDecorator {
	return Args('input', {
		type: () => CreateOne-userInputType, ...options
	});
}
