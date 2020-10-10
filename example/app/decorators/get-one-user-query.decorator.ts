import { Query, QueryOptions } from '@nestjs/graphql';
import { GQL_QUERY_GET_ONE_USER } from '../constants';

export function GetOneUserQuery(options?: QueryOptions): MethodDecorator {
	return Query(() => null, { name: GQL_QUERY_GET_ONE_USER, ...options });
}

