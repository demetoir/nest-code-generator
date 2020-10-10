---
to: <%= h.storage.enumTypeTestFile %>
---
import { <%= h.storage.enumName %> } from './<%= h.storage.filePrefix %>.enum';

describe('<%= h.storage.enumName %>', () => {
	it('should be defined', () => {
		expect(<%= h.storage.enumName %>).toBeDefined();
	});
});
