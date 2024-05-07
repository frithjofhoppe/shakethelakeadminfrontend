import i18n, {type Resource} from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en, languages} from '../../constants';

const resources: Resource = {
	en: {
		translation: {
			welcomeMessage: 'Welcome to React',
			appName: 'Shake The Lake Admin App',
			shakeTheLake: 'Shake The Lake',
			events: 'Events',
			overview: 'Overview',
			activityTypes: 'Activity Types',
			schedule: 'Schedule',
			bookings: 'Bookings',
			loading: 'Loading...',
		},
	},
	de: {
		translation: {
			welcomeMessage: 'Willkommen bei React',
		},
	},
	gsw: {
		translation: {
			welcomeMessage: 'Wiukomme bi React',
		},
	},
};

i18n
	.use(initReactI18next)
	.init({
		resources,
		// Lng: 'de',
		keySeparator: false,
		interpolation: {
			escapeValue: false,
		},
		// The default language
		fallbackLng: en,
		// It shows the supported languages
		supportedLngs: languages.map(l => l.code),
	})
	.then(() => 'obligatory for @typescript-eslint/no-floating-promises')
	.catch(() => 'obligatory for @typescript-eslint/no-floating-promises');

export default i18n;
