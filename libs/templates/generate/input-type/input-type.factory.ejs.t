---
to: <%= h.storage.inputTypeFactoryFile %>
---
import { <%= h.storage.inputTypeClassName %> } from './<%= h.storage.filePrefix %>.input-type';

export class <%= h.storage.inputTypeClassName %>Factory {
	static build(): <%= h.storage.inputTypeClassName %> {
		const inputType = new <%= h.storage.inputTypeClassName %>();

		return inputType;
	}
}
