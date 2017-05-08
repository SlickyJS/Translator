import { DirectiveMetadataLoader } from '@slicky/core';
import { ClassType } from '@slicky/lang';
import { Translator, ParametersList } from '../../translator';
export declare class ComponentTranslator {
    private translator;
    constructor(translator: Translator, metadataLoader: DirectiveMetadataLoader, componentType: ClassType<any>);
    translate(message: any, countOrParameters?: number | ParametersList, parameters?: ParametersList): string;
}
