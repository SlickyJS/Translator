"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@slicky/core");
var TranslatorFilter = (function () {
    function TranslatorFilter() {
    }
    TranslatorFilter.prototype._setTranslator = function (translator) {
        this.translator = translator;
    };
    TranslatorFilter.prototype.transform = function (message, countOrParameters, parameters) {
        if (countOrParameters === void 0) { countOrParameters = null; }
        if (parameters === void 0) { parameters = {}; }
        return this.translator.translate(message, countOrParameters, parameters);
    };
    return TranslatorFilter;
}());
TranslatorFilter = __decorate([
    core_1.Filter({
        name: 'translate',
    })
], TranslatorFilter);
exports.TranslatorFilter = TranslatorFilter;
