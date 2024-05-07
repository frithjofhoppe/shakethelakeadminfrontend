import React from 'react';
import {useTranslation} from 'react-i18next';
import { useLocation } from 'react-router-dom';
import CreateEventDialog from './create-event-dialog';

const EventOverview: React.FC = () => {
	const {t} = useTranslation();
	const location = useLocation();

	return (
		<>
			<div className="flex flex-col items-center py-24">
				<h1 className="text-2xl font-bold mb-10">{t('Overview')} for path: {location.pathname}</h1>
          		<h4>{t('WelcomeMessage')}</h4>
				<CreateEventDialog/>
			</div>
		</>
	);
};

export default EventOverview;
