import { GetOneUserQuery } from './get-one-user-query.decorator';

describe('GetOneUserQuery', () => {
	it('should defined', () => {
		expect(GetOneUserQuery).toBeDefined();
	});

	it('should return Query decorator', () => {
		const decorator = GetOneUserQuery();

		expect(decorator).toBeInstanceOf(Function);
	});

	it('should take arg options', () => {
		const options = {};

		const decorator = GetOneUserQuery(options);

		expect(decorator).toBeInstanceOf(Function);
	});
});
