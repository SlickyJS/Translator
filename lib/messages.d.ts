export interface MessagesList {
    [message: string]: string | Array<string> | MessagesList;
}
export interface LocalesMessagesList {
    [locale: string]: MessagesList;
}
export declare class Messages {
    private storage;
    getMessages(): LocalesMessagesList;
    addMessages(messages: LocalesMessagesList): void;
    hasLocale(locale: string): boolean;
    findMessage(locale: string, message: string): string | Array<string>;
}
