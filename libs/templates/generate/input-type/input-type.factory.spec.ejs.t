---
to: <%= h.storage.inputTypeFactoryTestFile %>
---
import { <%= h.storage.inputTypeClassName %> } from './<%= h.storage.filePrefix %>.input-type';
import { <%= h.storage.inputTypeClassName %>Factory } from './<%= h.storage.filePrefix %>.input-type.factory';

describe('<%= h.storage.inputTypeClassName %>Factory', () => {
	const factory = <%= h.storage.inputTypeClassName %>Factory;

	it('should be defined', () => {
		expect(factory).toBeDefined();
	});

	describe('static method build', () => {
		it('should defined', () => {
			expect(factory.build).toBeDefined();
		});

		it('should return object type', () => {
			const user = factory.build();

			expect(user).toBeInstanceOf(<%= h.storage.inputTypeClassName %>);
		});
	});
});
