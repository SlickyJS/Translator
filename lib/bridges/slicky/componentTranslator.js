"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentTranslator = (function () {
    function ComponentTranslator(translator, metadataLoader, componentType) {
        this.translator = translator;
        this.translator.addMessages(metadataLoader.load(componentType).translations);
    }
    ComponentTranslator.prototype.translate = function (message, countOrParameters, parameters) {
        if (countOrParameters === void 0) { countOrParameters = null; }
        if (parameters === void 0) { parameters = {}; }
        return this.translator.translate(message, countOrParameters, parameters);
    };
    return ComponentTranslator;
}());
exports.ComponentTranslator = ComponentTranslator;
