"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@slicky/core");
var translator_1 = require("../../translator");
var componentTranslator_1 = require("./componentTranslator");
var translatorFilter_1 = require("./translatorFilter");
var TranslatorExtension = (function (_super) {
    __extends(TranslatorExtension, _super);
    function TranslatorExtension(locale) {
        var _this = _super.call(this) || this;
        _this.translator = new translator_1.Translator(locale);
        return _this;
    }
    TranslatorExtension.prototype.getFilters = function () {
        return [
            translatorFilter_1.TranslatorFilter,
        ];
    };
    TranslatorExtension.prototype.doUpdateComponentMetadata = function (componentType, metadata, annotation) {
        metadata.translations = annotation.translations;
    };
    TranslatorExtension.prototype.doInitComponentContainer = function (container, componentType, el) {
        var _this = this;
        container.addService(componentTranslator_1.ComponentTranslator, {
            useFactory: function (container) {
                return new componentTranslator_1.ComponentTranslator(_this.translator.fork(), container.get(core_1.DirectiveMetadataLoader), componentType);
            },
        });
    };
    TranslatorExtension.prototype.doInitComponentFilter = function (component, filter, container) {
        if (!(filter instanceof translatorFilter_1.TranslatorFilter)) {
            return;
        }
        filter._setTranslator(container.get(componentTranslator_1.ComponentTranslator));
    };
    return TranslatorExtension;
}(core_1.AbstractExtension));
exports.TranslatorExtension = TranslatorExtension;
