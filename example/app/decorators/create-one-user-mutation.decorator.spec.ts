import { CreateOneUserMutation } from './create-one-user-mutation.decorator';

describe('CreateOneUserMutation', () => {
	it('should defined', () => {
		expect(CreateOneUserMutation).toBeDefined();
	});

	it('should return Mutation decorator', () => {
		const decorator = CreateOneUserMutation();

		expect(decorator).toBeInstanceOf(Function);
	});

	it('should take arg options', function() {
		const options = {};

		const decorator = CreateOneUserMutation(options);

		expect(decorator).toBeInstanceOf(Function);
	});
});
