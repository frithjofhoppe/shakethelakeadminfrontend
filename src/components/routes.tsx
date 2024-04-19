import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CreateEvent from "../pages/event/create-event";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create-event" element={<CreateEvent />} />
        </Routes>
    );
};

export default AppRoutes;
