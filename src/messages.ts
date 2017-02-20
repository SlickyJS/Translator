import {merge, isString, isArray} from '@slicky/utils';
import {PLURAL_FORMS} from './pluralForms';


export declare interface MessagesList
{
	[message: string]: string|Array<string>|MessagesList,
}


export declare interface LocalesMessagesList
{
	[locale: string]: MessagesList,
}


export class Messages
{


	private storage: LocalesMessagesList = {};


	public getMessages(): LocalesMessagesList
	{
		return this.storage;
	}


	public addMessages(messages: LocalesMessagesList): void
	{
		for (let locale in messages) {
			if (messages.hasOwnProperty(locale)) {
				if (typeof PLURAL_FORMS[locale] === 'undefined') {
					throw new Error(`Translator: trying to add messages with unknown locale "${locale}".`);
				}

				if (!this.hasLocale(locale)) {
					this.storage[locale] = {};
				}

				this.storage[locale] = merge(this.storage[locale], messages[locale]);
			}
		}
	}


	public hasLocale(locale: string): boolean
	{
		return typeof this.storage[locale] !== 'undefined';
	}


	public findMessage(locale: string, message: string): string|Array<string>
	{
		if (!this.hasLocale(locale)) {
			return null;
		}

		let path = message.split('.');
		let current = this.storage[locale];

		for (let i = 0; i < path.length; i++) {
			let key = path[i];

			if (typeof current[key] === 'undefined') {
				return null;
			}

			current = <any>current[key];
		}

		if (!isString(current) && !isArray(current)) {
			return null;
		}

		return <any>current;
	}

}
