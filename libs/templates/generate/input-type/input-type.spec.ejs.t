---
to: <%= h.storage.inputTypeTestFile %>
---
import { <%= h.storage.inputTypeClassName %> } from './<%= h.storage.filePrefix %>.input-type';

describe('<%= h.storage.inputTypeClassName %>', () => {
	it('should be defined', () => {
		expect(<%= h.storage.inputTypeClassName %>).toBeDefined();
		expect(new <%= h.storage.inputTypeClassName %>).toBeDefined();
	});

	describe('should define field', () => {
		const objectType = new <%= h.storage.inputTypeClassName %>();

		it('should prepare objectType', function() {
		    expect(objectType).toBeDefined()
		});
	});
});
