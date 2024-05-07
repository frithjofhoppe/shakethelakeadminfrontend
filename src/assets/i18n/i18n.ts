import i18n, {type Resource} from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources: Resource = {
	en: {
		translation: {
			welcomeMessage: 'Welcome to React',
		},
	},
	de: {
		translation: {
			welcomeMessage: 'Willkommen bei React',
		},
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: 'de',
	keySeparator: false,
	interpolation: {
		escapeValue: false,
	},
})
	.then(() => 'obligatory for @typescript-eslint/no-floating-promises')
	.catch(() => 'obligatory for @typescript-eslint/no-floating-promises');

export default i18n;
