import React from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";
import EventForm from "../forms/EventCreateForm";

const CreateEventPage: React.FC = () => {
    const form = useForm();
    const navigate = useNavigate();

    return (
        <div>
            <EventForm  />
        </div>
    );
};

export default CreateEventPage;
