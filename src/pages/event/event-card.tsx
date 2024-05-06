import React from 'react';
import {ArrowRight, Trash} from 'lucide-react';
import {type EventDto} from '../../models/api/event.model';
import {deleteEvent} from '../../services/EventService';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '../../components/ui/card';

const EventCard: React.FC<{event: EventDto}> = ({event}) => {
	const handleDelete = async () => {
		try {
			await deleteEvent(event.id);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Card className="relative w-full max-w-full">
			<div className="absolute top-2 right-2 flex space-x-2">
				<Trash onClick={handleDelete} className="cursor-pointer mt-2 mr-2 hover:text-red-600" />
			</div>
			<CardHeader className="flex justify-start items-start">
				<CardTitle>{event.title}</CardTitle>
			</CardHeader>
			<CardContent className="relative">
				<CardDescription>{event.description}</CardDescription>
				<ArrowRight className="absolute bottom-0 right-0 mb-2 mr-2" />
			</CardContent>
		</Card>
	);
};

export default EventCard;
