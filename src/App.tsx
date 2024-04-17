import React from 'react';
import {useTranslation} from 'react-i18next';
import './assets/i18n/i18n'
import {BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from './components/Routes';

function App() {
    const {t} = useTranslation();

    return (
        <Router>
            <div className="App">
                <AppRoutes/>
            </div>
        </Router>
    );
}

export default App;
