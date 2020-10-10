---
to: <%= h.storage.objectTypeFactoryFile %>
---
import { <%= h.storage.objectTypeClassName %> } from './<%= h.storage.filePrefix %>.object-type';

export class <%= h.storage.objectTypeClassName %>Factory {
	static build(): <%= h.storage.objectTypeClassName %> {
		const objectType = new <%= h.storage.objectTypeClassName %>();

		return objectType;
	}
}