import { UserObjectType } from './user.object-type';

export class UserObjectTypeFactory {
	static build(): UserObjectType {
		const objectType = new UserObjectType();

		return objectType;
	}
}