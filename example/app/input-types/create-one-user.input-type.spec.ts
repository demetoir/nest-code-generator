import { CreateOne-userInputType } from './create-one-user.input-type';

describe('CreateOne-userInputType', () => {
	it('should be defined', () => {
		expect(CreateOne-userInputType).toBeDefined();
		expect(new CreateOne-userInputType).toBeDefined();
	});

	describe('should define field', () => {
		const objectType = new CreateOne-userInputType();

		it('should prepare objectType', function() {
		    expect(objectType).toBeDefined()
		});
	});
});
