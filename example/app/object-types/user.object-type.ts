import { ObjectType } from '@nestjs/graphql';
import { GQL_OBJECT_TYPE_USER } from '../constants'

@ObjectType(GQL_OBJECT_TYPE_USER, {
	implements: []
})
export class UserObjectType {}


