import React, {useState} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import EventList from "../components/event-list";
import {Button} from "../@/components/ui/button";
import {useNavigate} from "react-router-dom";

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col">
            <Header/>
            <div className="flex-grow flex flex-col items-center overflow-y-auto pt-32">
                <h1 className="text-2xl font-bold mb-10">Shake The Lake Admin</h1>
                <EventList></EventList>
                <Button onClick={() => navigate('/create-event')}
                        className=" w-[350px] border-2 border-gray-500 text-center text-black bg-transparent">
                    Add new event
                </Button>
            </div>
            <Footer/>
        </div>
    );
}
export default HomePage;
