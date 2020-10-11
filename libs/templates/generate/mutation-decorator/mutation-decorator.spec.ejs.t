---
to: <%= h.storage.decoratorTestFile %>
---
import { <%= h.storage.decoratorName %> } from '<%= h.storage.decoratorImportFile %>';

describe('<%= h.storage.decoratorName %>', () => {
	it('should defined', () => {
		expect(<%= h.storage.decoratorName %>).toBeDefined();
	});

	it('should return Mutation decorator', () => {
		const decorator = <%= h.storage.decoratorName %>();

		expect(decorator).toBeInstanceOf(Function);
	});

	it('should take arg options', function() {
		const options = {};

		const decorator = <%= h.storage.decoratorName %>(options);

		expect(decorator).toBeInstanceOf(Function);
	});
});
