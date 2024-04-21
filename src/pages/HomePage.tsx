import React from 'react';
import EventList from "./event/event-list";

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-col items-center overflow-y-auto pt-32 ">
                <h1 className="text-2xl font-bold mb-10">Shake The Lake Admin</h1>
                <EventList/>
            </div>
        </div>
    );
}
export default HomePage;
