import { CreateOneUserInputType } from './create-one-user.input-type';
import { CreateOneUserInputTypeFactory } from './create-one-user.input-type.factory';

describe('CreateOneUserInputTypeFactory', () => {
	const factory = CreateOneUserInputTypeFactory;

	it('should be defined', () => {
		expect(factory).toBeDefined();
	});

	describe('static method build', () => {
		it('should defined', function() {
			expect(factory.build).toBeDefined();
		});

		it('should return object type', () => {
			const user = factory.build();

			expect(user).toBeInstanceOf(CreateOneUserInputType);
		});
	});
});
