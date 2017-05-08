import {DirectiveMetadataLoader} from '@slicky/core';
import {ClassType} from '@slicky/lang';
import {Translator, ParametersList} from '../../translator';


export class ComponentTranslator
{


	private translator: Translator;


	constructor(translator: Translator, metadataLoader: DirectiveMetadataLoader, componentType: ClassType<any>)
	{
		this.translator = translator;
		this.translator.addMessages(metadataLoader.load(componentType).translations);
	}


	public translate(message: any, countOrParameters: number|ParametersList = null, parameters: ParametersList = {}): string
	{
		return this.translator.translate(message, countOrParameters, parameters);
	}

}
