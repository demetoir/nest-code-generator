import { GetOne-userQuery } from './get-one-user-query.decorator';

describe('GetOne-userQuery', () => {
	it('should defined', () => {
		expect(GetOne-userQuery).toBeDefined();
	});

	it('should return Query decorator', () => {
		const decorator = GetOne-userQuery();

		expect(decorator).toBeInstanceOf(Function);
	});

	it('should take arg options', function() {
		const options = {};

		const decorator = GetOne-userQuery(options);

		expect(decorator).toBeInstanceOf(Function);
	});
});
