import { CreateOne-userInputTypeArgs } from './create-one-user-input-type-args.decorator';

describe('CreateOne-userInputTypeArgs', () => {
	it('should defined', () => {
		expect(CreateOne-userInputTypeArgs).toBeDefined();
	});

	it('should return Mutation decorator', () => {
		const decorator = CreateOne-userInputTypeArgs();

		expect(decorator).toBeInstanceOf(Function);
	});

	it('should take arg options', function() {
		const options = {};

		const decorator = CreateOne-userInputTypeArgs(options);

		expect(decorator).toBeInstanceOf(Function);
	});
});
