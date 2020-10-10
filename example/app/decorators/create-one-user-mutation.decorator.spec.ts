import { CreateOne-userMutation } from './create-one-user-mutation.decorator';

describe('CreateOne-userMutation', () => {
	it('should defined', () => {
		expect(CreateOne-userMutation).toBeDefined();
	});

	it('should return Mutation decorator', () => {
		const decorator = CreateOne-userMutation();

		expect(decorator).toBeInstanceOf(Function);
	});

	it('should take arg options', function() {
		const options = {};

		const decorator = CreateOne-userMutation(options);

		expect(decorator).toBeInstanceOf(Function);
	});
});
