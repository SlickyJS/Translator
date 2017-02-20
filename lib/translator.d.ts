import { LocalesMessagesList } from './messages';
export interface ParametersList {
    [name: string]: string | number | boolean;
}
export declare class Translator {
    private parent;
    private messages;
    private locale;
    constructor(locale: string, parent?: Translator);
    addMessages(messages: LocalesMessagesList): void;
    translate(message: any, countOrParameters?: number | ParametersList, parameters?: ParametersList): string;
    fork(): Translator;
    private findMessage(message);
    private applyParameters(message, parameters);
}
