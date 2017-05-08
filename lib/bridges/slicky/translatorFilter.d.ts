import { FilterInterface } from '@slicky/core';
import { ComponentTranslator } from './componentTranslator';
import { ParametersList } from '../../translator';
export declare class TranslatorFilter implements FilterInterface {
    private translator;
    _setTranslator(translator: ComponentTranslator): void;
    transform(message: any, countOrParameters?: number | ParametersList, parameters?: ParametersList): string;
}
