import { CreateOneUserInputType } from './create-one-user.input-type';

describe('CreateOneUserInputType', () => {
	it('should be defined', () => {
		expect(CreateOneUserInputType).toBeDefined();
		expect(new CreateOneUserInputType).toBeDefined();
	});

	describe('should define field', () => {
		const objectType = new CreateOneUserInputType();

		it('should prepare objectType', function() {
		    expect(objectType).toBeDefined()
		});
	});
});
