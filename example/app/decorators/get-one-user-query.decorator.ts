import { Query, QueryOptions } from '@nestjs/graphql';
import { GQL_QUERY_GET_ONE-USER } from '../constants';

export function GetOne-userQuery(options?: QueryOptions): MethodDecorator {
	return Query(() => null, { name: GQL_QUERY_GET_ONE-USER, ...options });
}

