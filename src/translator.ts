import {stringify, isString, isNumber, isObject, isArray} from '@slicky/utils';
import {PLURAL_FORMS} from './pluralForms';
import {Messages, LocalesMessagesList} from './messages';


export declare interface ParametersList
{
	[name: string]: string|number|boolean,
}


export class Translator
{


	private parent: Translator;

	private messages: Messages;

	private locale: string;


	constructor(locale: string, parent?: Translator)
	{
		if (typeof PLURAL_FORMS[locale] === 'undefined') {
			throw new Error(`Translator: unknown locale "${locale}".`);
		}

		this.messages = new Messages;
		this.locale = locale;
		this.parent = parent;
	}


	public addMessages(messages: LocalesMessagesList): void
	{
		this.messages.addMessages(messages);
	}


	public translate(message: any, countOrParameters: number|ParametersList = null, parameters: ParametersList = {}): string
	{
		let s = stringify(message);

		if (!isString(message)) {
			return s;
		}

		let translation = this.findMessage(s);
		if (translation === null) {
			return s;
		}

		let count: number = null;

		if (isObject(countOrParameters)) {
			parameters = <ParametersList>countOrParameters;
			count = null;
		} else if (isNumber(countOrParameters)) {
			count = <number>countOrParameters;
		}

		if (isArray(translation)) {
			if (translation.length === 0) {
				return s;
			}

			if (count === null) {
				translation = translation[0];

			} else {
				let pluralForm = PLURAL_FORMS[this.locale].form(count);

				parameters['count'] = stringify(count);

				translation = typeof translation[pluralForm] === 'undefined' ?
					translation[0] :
					translation[pluralForm]
				;
			}
		}

		translation = this.applyParameters(<string>translation, parameters);

		return <string>translation;
	}


	public fork(): Translator
	{
		return new Translator(this.locale, this);
	}


	private findMessage(message: string): string|Array<string>
	{
		let found = this.messages.findMessage(this.locale, message);

		if (found !== null) {
			return found;
		}

		if (this.parent) {
			return this.parent.messages.findMessage(this.locale, message);
		}

		return null;
	}


	private applyParameters(message: string, parameters: ParametersList): string
	{
		for (let name in parameters) {
			if (parameters.hasOwnProperty(name) && parameters[name] !== false) {
				let pattern = new RegExp('%' + name + '%', 'g');
				message = message.replace(pattern, stringify(parameters[name]));
			}
		}

		return message;
	}

}
