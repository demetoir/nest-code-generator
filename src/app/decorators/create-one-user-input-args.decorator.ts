import { Args, ArgsOptions } from '@nestjs/graphql';
import { CreateOneUserInputType } from '../input-types/create-one-user.input-type';

export function CreateOneUserInputArgs(options?: ArgsOptions): ParameterDecorator {
	return Args('input', {
		type: () => CreateOneUserInputType, ...options
	});
}
