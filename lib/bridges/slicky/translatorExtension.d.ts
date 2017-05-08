import { AbstractExtension, DirectiveDefinition, DirectiveOptions, ElementRef } from '@slicky/core';
import { ClassType } from '@slicky/lang';
import { Container } from '@slicky/di';
export declare class TranslatorExtension extends AbstractExtension {
    private translator;
    constructor(locale: string);
    getFilters(): Array<ClassType<any>>;
    doUpdateComponentMetadata(componentType: ClassType<any>, metadata: DirectiveDefinition, annotation: DirectiveOptions): void;
    doInitComponentContainer(container: Container, componentType: ClassType<any>, el: ElementRef<HTMLElement>): void;
    doInitComponentFilter(component: any, filter: any, container: Container): void;
}
