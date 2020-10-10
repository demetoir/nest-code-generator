import { InputType } from '@nestjs/graphql';
import { GQL_INPUT_TYPE_CREATE_ONE_USER} from '../constants'

@InputType(GQL_INPUT_TYPE_CREATE_ONE_USER)
export class CreateOneUserInputType {}

