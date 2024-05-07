import React from 'react';
import {useTranslation} from 'react-i18next';
import './assets/i18n/i18n';
import {createBrowserRouter,  RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventDetailLayout from './components/event-detail-layout';
import DefaultLayout from './components/main-layout';
import EventOverview from './pages/event/event-overview';

const router = createBrowserRouter([
	{
		path: '/',
		element: <DefaultLayout />,
		children: [{index: true, element: <HomePage />}],
	},
	{
		path: '/event',
		element: <EventDetailLayout />,
		children: [
			{path: ':id', element: <EventOverview />},
			{index: true, element: <EventOverview />}, // todo! no index??
		],
	},
]);

// if (import.meta.hot) {
// import.meta.hot.dispose(() => router.dispose());
// }

function App() {
	const {t} = useTranslation();
	return (
		<RouterProvider
			router={router}
			fallbackElement={<div>{t('Loading')}</div>}/>
	);
}

export default App;
