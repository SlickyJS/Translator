"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@slicky/utils");
var pluralForms_1 = require("./pluralForms");
var messages_1 = require("./messages");
var Translator = (function () {
    function Translator(locale, parent) {
        if (typeof pluralForms_1.PLURAL_FORMS[locale] === 'undefined') {
            throw new Error("Translator: unknown locale \"" + locale + "\".");
        }
        this.messages = new messages_1.Messages;
        this.locale = locale;
        this.parent = parent;
    }
    Translator.prototype.addMessages = function (messages) {
        this.messages.addMessages(messages);
    };
    Translator.prototype.translate = function (message, countOrParameters, parameters) {
        if (countOrParameters === void 0) { countOrParameters = null; }
        if (parameters === void 0) { parameters = {}; }
        var s = utils_1.stringify(message);
        if (!utils_1.isString(message)) {
            return s;
        }
        var translation = this.findMessage(s);
        if (translation === null) {
            return s;
        }
        var count = null;
        if (utils_1.isObject(countOrParameters)) {
            parameters = countOrParameters;
            count = null;
        }
        else if (utils_1.isNumber(countOrParameters)) {
            count = countOrParameters;
        }
        if (utils_1.isArray(translation)) {
            if (translation.length === 0) {
                return s;
            }
            if (count === null) {
                translation = translation[0];
            }
            else {
                var pluralForm = pluralForms_1.PLURAL_FORMS[this.locale].form(count);
                parameters['count'] = utils_1.stringify(count);
                translation = typeof translation[pluralForm] === 'undefined' ?
                    translation[0] :
                    translation[pluralForm];
            }
        }
        translation = this.applyParameters(translation, parameters);
        return translation;
    };
    Translator.prototype.fork = function () {
        return new Translator(this.locale, this);
    };
    Translator.prototype.findMessage = function (message) {
        var found = this.messages.findMessage(this.locale, message);
        if (found !== null) {
            return found;
        }
        if (this.parent) {
            return this.parent.messages.findMessage(this.locale, message);
        }
        return null;
    };
    Translator.prototype.applyParameters = function (message, parameters) {
        for (var name_1 in parameters) {
            if (parameters.hasOwnProperty(name_1) && parameters[name_1] !== false) {
                var pattern = new RegExp('%' + name_1 + '%', 'g');
                message = message.replace(pattern, utils_1.stringify(parameters[name_1]));
            }
        }
        return message;
    };
    return Translator;
}());
exports.Translator = Translator;
