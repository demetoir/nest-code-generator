---
to: <%= h.storage.objectTypeFactoryTestFile %>
---
import { <%= h.storage.objectTypeClassName %> } from './<%= h.storage.filePrefix %>.object-type';
import { <%= h.storage.objectTypeClassName %>Factory } from './<%= h.storage.filePrefix %>.object-type.factory';

describe('<%= h.storage.objectTypeClassName %>Factory', () => {
	const factory = <%= h.storage.objectTypeClassName %>Factory;

	it('should be defined', () => {
		expect(factory).toBeDefined();
	});

	describe('static method build', () => {
		it('should defined', () => {
			expect(factory.build).toBeDefined();
		});

		it('should return object type', () => {
			const objectType = factory.build();

			expect(objectType).toBeInstanceOf(<%= h.storage.objectTypeClassName %>);
		});
	});
});
