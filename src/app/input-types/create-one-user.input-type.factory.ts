import { CreateOneUserInputType } from './create-one-user.input-type';

export class CreateOneUserInputTypeFactory {
	static build(): CreateOneUserInputType {
		const inputType = new CreateOneUserInputType();

		return inputType;
	}
}
