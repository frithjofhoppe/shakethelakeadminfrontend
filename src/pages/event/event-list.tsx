import React, {useEffect, useState} from 'react';
import EventCard from "./event-card";
import {useNavigate} from "react-router-dom";
import {EventDto} from "../../models/api/event.model";
import {getAllEvents} from "../../services/EventService";
import {Button} from "../../components/ui/button";


const EventList = () => {
    const [events, setEvents] = useState<EventDto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
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

        fetchEvents();
    }, []);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (events.length === 0) return <p>No events found.</p>;

    return (
        <div className="flex justify-center w-full max-w-lg">
            <div className="w-full max-w-6xl p-4">
                <ul>
                    {events.map(event => (
                        <li key={event.id} className="mb-4 flex justify-center">
                            <EventCard event={event}/>
                        </li>
                    ))}
                </ul>
                <Button onClick={() => navigate('/create-event')}
                        className="hover:bg-primary-blue hover:text-white w-full border-2 border-gray-500 text-center text-black bg-transparent">
                    Add new event
                </Button>
            </div>
        </div>
    );
};

export default EventList;
