"use strict";
var utils_1 = require("@slicky/utils");
var pluralForms_1 = require("./pluralForms");
var Messages = (function () {
    function Messages() {
        this.storage = {};
    }
    Messages.prototype.getMessages = function () {
        return this.storage;
    };
    Messages.prototype.addMessages = function (messages) {
        for (var locale in messages) {
            if (messages.hasOwnProperty(locale)) {
                if (typeof pluralForms_1.PLURAL_FORMS[locale] === 'undefined') {
                    throw new Error("Translator: trying to add messages with unknown locale \"" + locale + "\".");
                }
                if (!this.hasLocale(locale)) {
                    this.storage[locale] = {};
                }
                this.storage[locale] = utils_1.merge(this.storage[locale], messages[locale]);
            }
        }
    };
    Messages.prototype.hasLocale = function (locale) {
        return typeof this.storage[locale] !== 'undefined';
    };
    Messages.prototype.findMessage = function (locale, message) {
        if (!this.hasLocale(locale)) {
            return null;
        }
        var path = message.split('.');
        var current = this.storage[locale];
        for (var i = 0; i < path.length; i++) {
            var key = path[i];
            if (typeof current[key] === 'undefined') {
                return null;
            }
            current = current[key];
        }
        if (!utils_1.isString(current) && !utils_1.isArray(current)) {
            return null;
        }
        return current;
    };
    return Messages;
}());
exports.Messages = Messages;
