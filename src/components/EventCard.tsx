import React from 'react';
import {EventDto} from "../models/api/event.model";
import {ArrowRight, Trash} from 'lucide-react';
import {deleteEvent} from '../services/EventService';


const EventCard: React.FC<{ event: EventDto }> = ({event}) => {
    const handleDelete = async () => {
        try {
            await deleteEvent(event.id);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div
            className="w-[350px] lg:max-w-full lg:flex relative bg-white rounded-lg shadow-lg border border-gray-300">
            <div className="p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">{event.title}</div>
                    <p className="text-gray-700 text-base">{event.description}</p>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 p-4">
                <ArrowRight
                    className="cursor-pointer fill-current text-gray-600 hover:text-gray-800 w-6 h-6"/>
            </div>
            <div className="absolute top-0 right-0 p-4">
                <Trash onClick={handleDelete} className="cursor-pointer fill-current text-gray-600 hover:text-red-600 w-6 h-6"/>
            </div>
        </div>
    );
};
export default EventCard;
