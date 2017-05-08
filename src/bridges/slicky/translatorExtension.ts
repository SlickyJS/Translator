import {AbstractExtension, DirectiveMetadataLoader, DirectiveDefinition, DirectiveOptions, ElementRef} from '@slicky/core';
import {ClassType} from '@slicky/lang';
import {Container} from '@slicky/di';
import {Translator} from '../../translator';
import {ComponentTranslator} from './componentTranslator';
import {TranslatorFilter} from './translatorFilter';


export class TranslatorExtension extends AbstractExtension
{


	private translator: Translator;


	constructor(locale: string)
	{
		super();

		this.translator = new Translator(locale);
	}


	public getFilters(): Array<ClassType<any>>
	{
		return [
			TranslatorFilter,
		];
	}


	public doUpdateComponentMetadata(componentType: ClassType<any>, metadata: DirectiveDefinition, annotation: DirectiveOptions): void
	{
		metadata.translations = annotation.translations;
	}


	public doInitComponentContainer(container: Container, componentType: ClassType<any>, el: ElementRef<HTMLElement>): void
	{
		container.addService(ComponentTranslator, {
			useFactory: (container: Container) => {
				return new ComponentTranslator(this.translator.fork(), container.get(DirectiveMetadataLoader), componentType);
			},
		});
	}


	public doInitComponentFilter(component: any, filter: any, container: Container): void
	{
		if (!(filter instanceof TranslatorFilter)) {
			return;
		}

		filter._setTranslator(container.get(ComponentTranslator));
	}

}
