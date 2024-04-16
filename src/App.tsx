import React from 'react';
import {useTranslation} from 'react-i18next';
import './assets/i18n/i18n'
import HomePage from './pages/HomePage';

function App() {
    const {t} = useTranslation();

    return (
        <div className="App">
            <HomePage/>
        </div>
    );
}

export default App;
