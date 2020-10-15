---
to: <%= h.storage.enumTypeTestFile %>
---
import { <%= h.storage.enumName %> } from './<%= h.storage.filePrefix %>.enum-type';

describe('<%= h.storage.enumName %>', () => {
	it('should be defined', () => {
		expect(<%= h.storage.enumName %>).toBeDefined();
	});
});
