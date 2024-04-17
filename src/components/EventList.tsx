import React, { useState, useEffect } from 'react';
import { EventDto } from '../models/api/event.model';
import {getAllEvents} from "../services/EventService";
import EventCard from "./EventCard";
import {Button} from "../@/components/ui/button";

const EventList = () => {
    const [events, setEvents] = useState<EventDto[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventsData = await getAllEvents();
                setEvents(eventsData);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        fetchEvents();
    }, []);

    return (
        <div>
            <ul>
                {events.map(event => (
                    <li key={event.id} className="mb-4">
                        <EventCard event={event}></EventCard>
                    </li>
                ))}
                <Button className="w-full border-2 border-gray-500 text-center text-black bg-transparent">
                    Add new event
                </Button>
            </ul>
            {}
        </div>
    );
};

export default EventList;
