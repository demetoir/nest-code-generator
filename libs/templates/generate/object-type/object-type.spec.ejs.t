---
to: <%= h.storage.objectTypeTestFile %>
---
import { <%= h.storage.objectTypeClassName %> } from './<%= h.storage.filePrefix %>.object-type';

describe('<%= h.storage.className %>', () => {
	it('should be defined', () => {
		expect(<%= h.storage.objectTypeClassName %>).toBeDefined();
		expect(new <%= h.storage.objectTypeClassName %>).toBeDefined();
	});

	describe('should define field', () => {
		const objectType = new <%= h.storage.objectTypeClassName %>();

		it('should prepare objectType', function() {
		    expect(objectType).toBeDefined()
		});
	});
});
