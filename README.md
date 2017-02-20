# Slicky/Translator

Typescript translator

## Installation

```
$ npm install @slicky/translator
```

## Usage

```typescript
import {Translator} from '@slicky/translator';

let currentLocale = 'en';		// todo

let translator = new Translator(currentLocale);

translator.addMessages({
	en: {
		homepage: {
			content: {
				headline: 'Hello world',
			},
		},
	},
	cs: {
		homepage: {
			content: {
				headline: 'Ahoj světe',
			},
		},
	},
});

console.log(translator.translate('homepage.content.headline'));	// output: "Hello world"
```

## Plural forms

```typescript
translator.addMessages({
	en: {
		car: [
			'One car',
			'%count% cars',
		],
	},
});

console.log(translator.translate('car'));		// output: "One car"
console.log(translator.translate('car', 5));	// output: "5 cars"
```

## Parameters

```typescript
translator.addMessages({
	en: {
		paintedCar: '%color% car',
	},
});

console.log(translator.translate('paintedCar', null, {color: 'blue'}));	// output: "blue car"
```

You can also omit the `null` in translate method:

```typescript
translator.translate('paintedCar', {color: 'blue'});
```
