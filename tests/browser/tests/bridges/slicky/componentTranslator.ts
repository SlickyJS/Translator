import {Component, __testing} from '@slicky/core';
import {expect} from 'chai';
import {SlickyTranslatorExtension, SlickyComponentTranslator} from '../../../../../src';


describe('#Bridges/Slicky/ComponentTranslator', () => {

	describe('translate()', () => {

		it('should translate message inside of component', () => {
			let called = false;

			@Component({
				selector: 'box',
				template: '',
				translations: {
					en: {
						message: 'hello world',
					},
				},
			})
			class TestComponent
			{


				constructor(translator: SlickyComponentTranslator)
				{
					expect(translator.translate('message')).to.be.equal('hello world');

					called = true;
				}

			}

			let appData = __testing.createApplication('<box></box>', [TestComponent]);

			appData.application.addExtension(new SlickyTranslatorExtension('en'));
			appData.application.run();

			expect(called).to.be.equal(true);
		});

		it('should translate message in component template', () => {
			@Component({
				selector: 'box',
				template: '{{ "message" | translate }}',
				translations: {
					en: {
						message: 'hello world',
					},
				},
			})
			class TestComponent {}

			let appData = __testing.createApplication('<box></box>', [TestComponent]);

			appData.application.addExtension(new SlickyTranslatorExtension('en'));
			appData.application.run();

			expect(appData.element.innerText).to.be.equal('hello world');
		});

		it('should translate message in different component templates', () => {
			@Component({
				selector: 'david',
				template: '{{ "name" | translate }}',
				translations: {
					en: {
						name: 'David',
					},
				},
			})
			class TestComponentA {}

			@Component({
				selector: 'clare',
				template: '{{ "name" | translate }}',
				translations: {
					en: {
						name: 'Clare',
					},
				},
			})
			class TestComponentB {}

			let appData = __testing.createApplication('<david></david>, <clare></clare>', [TestComponentA, TestComponentB]);

			appData.application.addExtension(new SlickyTranslatorExtension('en'));
			appData.application.run();

			expect(appData.element.innerText).to.be.equal('David, Clare');
		});

	});

});
