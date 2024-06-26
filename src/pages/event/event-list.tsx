import React, {useEffect, useState} from 'react';
import {type EventDto} from '../../models/api/event.model';
import {deleteEvent, getAllEvents} from '../../services/event-service';
import CreateEventDialog from './create-event-dialog';
import StlCard from '../../components/cards/card';

const EventList = () => {
	const [events, setEvents] = useState<EventDto[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | undefined>(undefined);

	// Todo! throws warning sometimes:
	// Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components

	// todo! validation etc does not work anymore
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

	const handleDelete = async (id: number) => {
		try {
			await deleteEvent(id);
			return true;
		} catch (error) {
			console.error(error); // Todo! add "real" error handling
			return false;
		}
	};

	return (
		<div className="flex justify-center w-full max-w-lg">
			<div className="w-full max-w-6xl p-4">
				<ul>
					{events.length > 0 ? (
						events.map((event) => (
							<li key={event.id} className="mb-4 flex justify-center">
								<StlCard
									{...event}
									path={`event/${event.id}`}
									handleDelete={handleDelete}
								/>
							</li>
						))
					) : (
						<p className="text-center">No events yet.</p>
					)}
				</ul>

				<CreateEventDialog />
			</div>
		</div>
	);
};

export default EventList;
