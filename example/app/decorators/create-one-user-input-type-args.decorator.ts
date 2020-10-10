import { Args, ArgsOptions } from '@nestjs/graphql';
import { CreateOneUserInputType } from '../input-types/create-one-user.input-type';

export function CreateOneUserInputTypeArgs(options?: ArgsOptions): ParameterDecorator {
	return Args('input', {
		type: () => CreateOneUserInputType, ...options
	});
}
