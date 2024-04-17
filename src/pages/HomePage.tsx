import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventList from "../components/EventList";

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="flex-grow flex flex-col items-center pt-32 pb-[215px] overflow-y-auto">
                <h1 className="text-2xl font-bold mb-10">Shake The Lake Admin</h1>
                <EventList></EventList>
            </div>
            <Footer/>
        </div>
    );
}
export default HomePage;
