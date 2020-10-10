import { Mutation, MutationOptions } from '@nestjs/graphql';
import { GQL_MUTATION_CREATE_ONE-USER } from '../constants';

export function CreateOne-userMutation(options?: MutationOptions): MethodDecorator {
	return Mutation(() => null, { name: GQL_MUTATION_CREATE_ONE-USER, ...options });
}

