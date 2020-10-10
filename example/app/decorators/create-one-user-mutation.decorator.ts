import { Mutation, MutationOptions } from '@nestjs/graphql';
import { GQL_MUTATION_CREATE_ONE_USER } from '../constants';

export function CreateOneUserMutation(options?: MutationOptions): MethodDecorator {
	return Mutation(() => null, { name: GQL_MUTATION_CREATE_ONE_USER, ...options });
}

