import { registerEnumType } from '@nestjs/graphql';
import { GQL_ENUM_TYPE_ROLE } from '../constants'

export enum RoleEnum {}

registerEnumType(RoleEnum, { name: GQL_ENUM_TYPE_ROLE });
