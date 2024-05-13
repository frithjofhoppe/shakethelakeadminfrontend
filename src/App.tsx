import React from 'react';
import {useTranslation} from 'react-i18next';
import './assets/i18n/i18n';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/home-page';
import EventDetailLayout from './components/event-detail-layout';
import DefaultLayout from './components/default-layout';
import EventOverview from './pages/event/event-overview';
import {eventDetailRoutes} from './constants';
import ErrorPage from './pages/error-page';
import ActivityTypesOverview from './pages/activity-type/activity-types';
import BoatsOverview from './pages/boat/boats';
import Schedule from './pages/shedule/shedule';
import Bookings from './pages/bookings/bookings';
import ActivityTypesDetail from './pages/activity-type/activity-type';
import Boat from './pages/boat/boat';
import Boats from './pages/boat/boats';
import ActivityType from './pages/activity-type/activity-type';
import ActivityTypes from './pages/activity-type/activity-types';

const router = createBrowserRouter([
	{
		path: '/',
		element: <DefaultLayout />,
		children: [{index: true, element: <HomePage />}],
		errorElement: (
			<DefaultLayout>
				<ErrorPage />
			</DefaultLayout>
		),
	},
	{
		path: '/event',
		element: <EventDetailLayout />,
		children: [
			{
				path: ':id',
				element: <EventOverview />,
			},
			{
				path: ':id/' + eventDetailRoutes.activityTypes,
				element: <ActivityTypes />,
			},
			{
				path: ':id/' + eventDetailRoutes.activityTypes + '/:activityTypeId',
			 	element: <ActivityType />,
			},
			{
				path: ':id/' + eventDetailRoutes.boats,
				element: <Boats />,
			},
			{path: ':id/' + eventDetailRoutes.boats + '/:boatId', element: <Boat />},
			{path: ':id/' + eventDetailRoutes.schedule, element: <Schedule />},
			{path: ':id/' + eventDetailRoutes.bookings, element: <Bookings />},
			{index: true, element: <EventOverview />}, // Todo! no index?? --> redirect, but how?
		],
	},
]);

// If (import.meta.hot) {
// import.meta.hot.dispose(() => router.dispose());
// }

function App() {
	const {t} = useTranslation();
	return (
		<RouterProvider
			router={router}
			fallbackElement={<div>{t('loading')}</div>}
		/>
	);
}

export default App;
