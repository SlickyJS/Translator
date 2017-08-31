import {Messages} from '../../src/messages';
import {expect} from 'chai';


let messages: Messages;


describe('#Messages', () => {

	beforeEach(() => {
		messages = new Messages;
	});

	describe('addMessages()', () => {

		it('should throw an error for unknown locale', () => {
			expect(() => {
				messages.addMessages({unknown_locale: {}});
			}).to.throw(Error, 'Translator: trying to add messages with unknown locale "unknown_locale".');
		});

		it('should add many messages', () => {
			messages.addMessages({en: {one: 'One'}});
			messages.addMessages({en: {two: 'Two'}});
			messages.addMessages({cs: {one: 'Jedna'}});
			messages.addMessages({cs: {two: 'Dvě'}});

			expect(messages.getMessages()).to.be.eql({
				en: {
					one: 'One',
					two: 'Two',
				},
				cs: {
					one: 'Jedna',
					two: 'Dvě'
				},
			});
		});

	});

	describe('hasLocale()', () => {

		it('should not have locale', () => {
			expect(messages.hasLocale('en')).to.be.equal(false);
		});

		it('should have locale', () => {
			messages.addMessages({en: {}});
			expect(messages.hasLocale('en')).to.be.equal(true);
		});

	});

	describe('findMessage()', () => {

		it('should not find message', () => {
			expect(messages.findMessage('en', 'one')).to.be.equal(null);
		});

		it('should not find final message', () => {
			messages.addMessages({en: {homepage: {one: 'One'}}});
			expect(messages.findMessage('en', 'homepage')).to.be.equal(null);
		});

		it('should find message in root', () => {
			messages.addMessages({en: {one: 'One'}});
			expect(messages.findMessage('en', 'one')).to.be.equal('One');
		});

		it('should find message', () => {
			messages.addMessages({en: {homepage: {content: {title: 'Hello'}}}});
			expect(messages.findMessage('en', 'homepage.content.title')).to.be.equal('Hello');
		});

	});

});
