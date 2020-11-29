import { UserObjectType } from './user.object-type';

describe('', () => {
	it('should be defined', () => {
		expect(UserObjectType).toBeDefined();
		expect(new UserObjectType).toBeDefined();
	});

	describe('should define field', () => {
		const objectType = new UserObjectType();

		it('should prepare objectType', () => {
		    expect(objectType).toBeDefined()
		});
	});
});
