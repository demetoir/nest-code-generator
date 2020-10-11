---
to: <%= h.storage.interfaceTypeTestFile %>
---
import { <%= h.storage.interfaceClassName %> } from './<%= h.storage.filePrefix %>.interface-type';

describe('<%= h.storage.interfaceClassName %>', () => {
	it('should be defined', () => {
		expect(<%= h.storage.interfaceClassName %>).toBeDefined();
	});
});
