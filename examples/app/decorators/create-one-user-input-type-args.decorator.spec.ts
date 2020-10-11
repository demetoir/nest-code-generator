import { CreateOneUserInputTypeArgs } from './create-one-user-input-type-args.decorator';

describe('CreateOneUserInputTypeArgs', () => {
	it('should defined', () => {
		expect(CreateOneUserInputTypeArgs).toBeDefined();
	});

	it('should return Mutation decorator', () => {
		const decorator = CreateOneUserInputTypeArgs();

		expect(decorator).toBeInstanceOf(Function);
	});

	it('should take arg options', function() {
		const options = {};

		const decorator = CreateOneUserInputTypeArgs(options);

		expect(decorator).toBeInstanceOf(Function);
	});
});
