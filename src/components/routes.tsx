import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import EventForm from "../pages/event/event-form";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create-event" element={<EventForm />} />
        </Routes>
    );
};

export default AppRoutes;
