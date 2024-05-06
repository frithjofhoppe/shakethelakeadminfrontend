import i18n, {type Resource} from 'i18next';
import {initReactI18next} from 'react-i18next';
import {EN, LANGUAGES} from '../../constants';

const resources: Resource = {
	en: {
		translation: {
			'WelcomeMessage': 'Welcome to React',
			'AppName': 'Shake The Lake Admin App',
			'ShakeTheLake': 'Shake The Lake',
			'Events': 'Events',
			'Overview': 'Overview',
			'ActivityTypes': 'Activity Types',
			'Schedule': 'Schedule',
			'Bookings': 'Bookings',
			'Loading': 'Loading...',
		},
	},
	de: {
		translation: {
			'WelcomeMessage': 'Willkommen bei React',
		},
	},
	gsw: {
		translation: {
			'WelcomeMessage': 'Wiukomme bi React',
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
		fallbackLng: EN,
		// It shows the supported languages
		supportedLngs: LANGUAGES.map(l => l.code),
	});

export default i18n;    
