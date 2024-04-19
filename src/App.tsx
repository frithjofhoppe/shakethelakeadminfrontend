import React from 'react';
import {useTranslation} from 'react-i18next';
import './assets/i18n/i18n'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainLayout from "./components/MainLayout";
import HomePage from "./pages/HomePage";
import CreateEvent from "./pages/event/create-event";

function App() {
    const {t} = useTranslation();

    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/create-event" element={<CreateEvent/>}/>
                </Routes>
            </MainLayout>
        </Router>
    );
}

export default App;
