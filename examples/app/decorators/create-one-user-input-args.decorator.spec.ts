import { CreateOneUserInputArgs } from './create-one-user-input-args.decorator';

describe('CreateOneUserInputArgs', () => {
	it('should defined', () => {
		expect(CreateOneUserInputArgs).toBeDefined();
	});

	it('should return Mutation decorator', () => {
		const decorator = CreateOneUserInputArgs();

		expect(decorator).toBeInstanceOf(Function);
	});

	it('should take arg options', () => {
		const options = {};

		const decorator = CreateOneUserInputArgs(options);

		expect(decorator).toBeInstanceOf(Function);
	});
});
