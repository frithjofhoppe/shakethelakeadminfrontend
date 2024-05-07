import i18n, {type Resource} from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources: Resource = {
	en: {
		translation: {
			welcome_message: 'Welcome to React',
		},
	},
	de: {
		translation: {
			welcome_message: 'Willkommen bei React',
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
});

export default i18n;
