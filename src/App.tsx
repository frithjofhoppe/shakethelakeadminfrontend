import React, {Dispatch, SetStateAction, Suspense, useState} from 'react';
import {useTranslation} from 'react-i18next';
import './assets/i18n/i18n';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import CreateEvent from './pages/event/create-event';
import { EventDto } from './models/api/event.model';

export const EventContext = React.createContext<{event: null | EventDto, setEvent: (event: null | EventDto) => void}>({event: null, setEvent: () => {}});

function App() {
	// Will be used for further translation steps
	const {t} = useTranslation();

  	const [event, setEvent]: [null | EventDto, (event: null | EventDto) => void] = useState<EventDto | null>(null);

	return (
		<Router>
			<EventContext.Provider value={{ event: event, setEvent: setEvent }}>
				<MainLayout>
					<Suspense fallback={<div>{t('Loading')}</div>}>
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/create-event" element={<CreateEvent />} />
						</Routes>
					</Suspense>
				</MainLayout>
			</EventContext.Provider>
		</Router>
	);
}

export default App;
