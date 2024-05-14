export const en = 'en';
export const de = 'de';
export const ch = 'gsw';

export const languages = [
	{label: 'German', code: de},
	{label: 'English', code: en},
	{label: 'Swiss-German', code: ch},
];

export const eventBaseRoute = '/event/';

export const eventDetailRoutes = {
	id: ':id',
	activityTypes: 'activity-types',
	activityTypeId: ':activityTypeId',
	boats: 'boats',
	boatId: ':boatId',
	schedule: 'schedule',
	bookings: 'bookings',
};

export const iconPaths = {
	tiAndM: '/src/assets/icons/ti-and-m-logo.svg',
	shakeTheLake: '/src/assets/icons/shake-the-lake-icon.svg',
};