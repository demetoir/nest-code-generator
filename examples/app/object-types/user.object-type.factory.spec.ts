import { UserObjectType } from './user.object-type';
import { UserObjectTypeFactory } from './user.object-type.factory';

describe('UserObjectTypeFactory', () => {
	const factory = UserObjectTypeFactory;

	it('should be defined', () => {
		expect(factory).toBeDefined();
	});

	describe('static method build', () => {
		it('should defined', () => {
			expect(factory.build).toBeDefined();
		});

		it('should return object type', () => {
			const objectType = factory.build();

			expect(objectType).toBeInstanceOf(UserObjectType);
		});
	});
});
