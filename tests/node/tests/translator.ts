import {Translator} from '../../../src/translator';
import {expect} from 'chai';


let translator: Translator;


describe('#Translator', () => {

	beforeEach(() => {
		translator = new Translator('en');
	});

	describe('constructor()', () => {

		it('should throw an error when providing unknown locale', () => {
			expect(() => {
				new Translator('unknown_locale');
			}).to.throw(Error, 'Translator: unknown locale "unknown_locale".');
		});

	});

	describe('translate()', () => {

		it('should not translate non strings', () => {
			expect(translator.translate(5)).to.be.equal('5');
		});

		it('should return message when translation does not exists', () => {
			expect(translator.translate('title')).to.be.equal('title');
		});

		it('should translate simple message', () => {
			translator.addMessages({
				en: {title: 'Hello'},
			});

			expect(translator.translate('title')).to.be.equal('Hello');
		});

		it('should translate message with longer path', () => {
			translator.addMessages({
				en: {homepage: {content: {title: 'Hello'}}},
			});

			expect(translator.translate('homepage.content.title')).to.be.equal('Hello');
		});

		it('should return original message when translations in plural form are missing', () => {
			translator.addMessages({
				en: {car: []},
			});

			expect(translator.translate('car')).to.be.equal('car');
		});

		it('should return first plural form when count is missing', () => {
			translator.addMessages({
				en: {car: ['Car', 'Cars']},
			});

			expect(translator.translate('car')).to.be.equal('Car');
		});

		it('should return message in correct plural form', () => {
			translator.addMessages({
				en: {car: ['Car', 'Cars']},
			});

			expect(translator.translate('car', 5)).to.be.equal('Cars');
		});

		it('should return first translation if plural form is missing', () => {
			translator.addMessages({
				en: {car: ['Car']},
			});

			expect(translator.translate('car', 5)).to.be.equal('Car');
		});

		it('should have custom parameters', () => {
			translator.addMessages({
				en: {car: '%color% car'},
			});

			expect(translator.translate('car', {color: 'blue'})).to.be.equal('blue car');
		});

		it('should include count in translation', () => {
			translator.addMessages({
				en: {car: ['1 car', '%count% cars']},
			});

			expect(translator.translate('car', 4)).to.be.equal('4 cars');
		});

	});

	describe('fork()', () => {

		it('should translate message from fork', () => {
			let fork = translator.fork();

			fork.addMessages({
				en: {car: 'Car'},
			});

			expect(fork.translate('car')).to.be.equal('Car');
		});

		it('should translate message from parent', () => {
			translator.addMessages({
				en: {car: 'Car'},
			});

			let fork = translator.fork();

			expect(fork.translate('car')).to.be.equal('Car');
		});

	});

});
