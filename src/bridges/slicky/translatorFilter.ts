import {Filter, FilterInterface} from '@slicky/core';
import {ComponentTranslator} from './componentTranslator';
import {ParametersList} from '../../translator';


@Filter({
	name: 'translate',
})
export class TranslatorFilter implements FilterInterface
{


	private translator: ComponentTranslator;


	public _setTranslator(translator: ComponentTranslator): void
	{
		this.translator = translator;
	}


	public transform(message: any, countOrParameters: number|ParametersList = null, parameters: ParametersList = {}): string
	{
		return this.translator.translate(message, countOrParameters, parameters);
	}

}
