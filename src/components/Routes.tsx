import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CreateEventPage from "../pages/CreateEventPage";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create-event" element={<CreateEventPage />} />
          {/*  <Route path="/edit-event/:id" element={<EditEventPage />} />*/}
        </Routes>
    );
};

export default AppRoutes;
