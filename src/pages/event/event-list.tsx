import React, {useEffect, useState} from 'react';
import EventCard from './event-card';
import {useNavigate} from 'react-router-dom';
import {type EventDto} from '../../models/api/event.model';
import {getAllEvents} from '../../services/EventService';
import {Button} from '../../components/ui/button';

const EventList = () => {
	const [events, setEvents] = useState<EventDto[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | undefined>(null);
	const navigate = useNavigate();

	useEffect(() => {
		async function fetchEvents() {
			try {
				const eventsData = await getAllEvents();
				setEvents(eventsData);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching events:', error);
				setError('Failed to load events');
				setLoading(false);
			}
		}

		fetchEvents()
			.then(() => 'obligatory for @typescript-eslint/no-floating-promises')
			.catch(() => 'obligatory for @typescript-eslint/no-floating-promises');
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

	return (
		<div className="flex justify-center w-full max-w-lg">
			<div className="w-full max-w-6xl p-4">
				<ul>
					{/* {events.length > 0 ? (
						events.map(event => (
							<li key={event.id} className="mb-4 flex justify-center">
								<EventCard event={event}/>
							</li>
						))
					) : (
						<p className="text-center">No events yet.</p>
					)} */}
				</ul>
				<Button
					onClick={() => {
						navigate('/create-event');
					}}
					className="hover:bg-primary-blue hover:text-white w-full border-2 border-gray-500 text-center text-black bg-transparent">
					Add new event
				</Button>
			</div>
		</div>
	);
};

export default EventList;
