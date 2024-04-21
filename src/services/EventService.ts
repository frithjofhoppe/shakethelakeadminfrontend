import axios from 'axios';
import {EventDto} from "../models/api/event.model";

const BASE_URL = "http://localhost:8080";

export const getAllEvents = async (): Promise<EventDto[]> => {
    const response = await axios.get<EventDto[]>(`${BASE_URL}/event`);
    return response.data;
};

export const getEventById = async (id: number): Promise<EventDto> => {
    const response = await axios.get<EventDto>(`${BASE_URL}/event/${id}`);
    return response.data;
};

    export const createEvent = async (event: EventDto): Promise<EventDto> => {
    const response = await axios.post<EventDto>(`${BASE_URL}/event`, event);
    return response.data;
}

export const deleteEvent = async (id: number): Promise<void> => {
    await axios.delete(`${BASE_URL}/event/${id}`);
};
