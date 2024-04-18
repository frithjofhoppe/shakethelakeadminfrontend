import React, {useState} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import EventList from "../components/event-list";
import {Button} from "../@/components/ui/button";
import {useNavigate} from "react-router-dom";

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="flex-grow flex flex-col items-center overflow-y-auto pt-32">
                <h1 className="text-2xl font-bold mb-10">Shake The Lake Admin</h1>
                <EventList></EventList>
            </div>
            <Footer/>
        </div>
    );
}
export default HomePage;
