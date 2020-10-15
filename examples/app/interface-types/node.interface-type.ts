import { InterfaceType } from '@nestjs/graphql';
import { GQL_INTERFACE_TYPE_NODE } from "../constants"

@InterfaceType(GQL_INTERFACE_TYPE_NODE)
export abstract class NodeInterfaceType {}
