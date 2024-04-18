import React, { useEffect, useState } from 'react';
import {getAllEvents} from "../services/EventService";
import EventCard from "./event-card";
import {EventDto} from "../models/api/event.model";

const EventList = () => {
    const [events, setEvents] = useState<EventDto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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
        fetchEvents();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (events.length === 0) return <p>No events found.</p>;

    return (
        <div>
            <ul>
                {events.map(event => (
                    <li key={event.id} className="mb-4">
                        <EventCard event={event} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
