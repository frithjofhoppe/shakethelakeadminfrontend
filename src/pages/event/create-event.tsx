import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useNavigate} from "react-router-dom";
import {EventDto} from "../../models/api/event.model";
import {createEvent} from "../../services/EventService";
import {Form, FormControl, FormField, FormItem, FormLabel} from "../../components/ui/form";
import {Input} from '../../components/ui/input';
import {Button} from "../../components/ui/button";

const formSchema = z.object({
        title: z.string().min(5).max(20),
        description: z.string(),
        date: z.string(),
        internalEventStart: z.string(),
        externalEventStart: z.string(),
        location: z.string()
    }
);

const CreateEvent: React.FC = () => {
    const navigate = useNavigate();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: 'onChange'
    });

    const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (values) => {
        // TODO sync for design/prototyp update: how to implement further form inputs for location properties
        const event: EventDto = {
            id: 0,
            title: values.title,
            description: values.description,
            location: {
                id: 0,
                name: values.location,
                street: '',
                streetNr: 0,
                town: '',
                postalCode: 0,
                canton: ''
            },
            date: values.date,
            customerCode: '',
            employeeCode: '',
            customerOnlyTime: '',
            isStarted: false,
            startedAt: '',
            endedAt: ''
        };
        try {
            const createdEvent = createEvent(event);
            console.log('Created event:', createdEvent);
            navigate('/');
        } catch (error) {
            console.error('Failed to create event:', error);
        }
    };

    return (
        <div className="flex items-center justify-center p-4 min-h-screen">
            <div className="bg-white p-5 rounded-lg shadow-md w-1/2">
                <h2 className="text-left mb-5">Create Event</h2>
                <Form {...form}>
                    <form className="space-y-4">
                        <FormField name="title" control={form.control} render={({field}) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Sommer Event 2024" {...field}
                                           className="input"/>
                                </FormControl>
                            </FormItem>
                        )}></FormField>
                        <FormField name="description" control={form.control}
                                   render={({field}) => (
                                       <FormItem>
                                           <FormLabel>Description</FormLabel>
                                           <FormControl>
                                               <Input placeholder="Shake the Lake 2024" {...field}
                                                      className="input"/>
                                           </FormControl>
                                       </FormItem>
                                   )}></FormField>

                        {/*Location ist currently just a single string field for simplicity
                            In the Future we will need some more fields or a seperate form to fill the date for the location
                            */}

                        <FormField name="location" control={form.control}
                                   render={({field}) => (
                                       <FormItem>
                                           <FormLabel>Location</FormLabel>
                                           <FormControl>
                                               <Input {...field} className="input"/>
                                           </FormControl>
                                       </FormItem>
                                   )}></FormField>

                        <FormField name="date" control={form.control} render={({field}) => (
                            <FormItem>
                                <FormLabel>Date</FormLabel>
                                <FormControl>
                                    <Input type="datetime-local" {...field} className="input"/>
                                </FormControl>
                            </FormItem>
                        )}></FormField>
                        <FormField name="internalEventStart" control={form.control}
                                   render={({field}) => (
                                       <FormItem>
                                           <FormLabel>Internal Start</FormLabel>
                                           <FormControl>
                                               <Input type="datetime-local" {...field}
                                                      className="input"/>
                                           </FormControl>
                                       </FormItem>
                                   )}></FormField>
                        <FormField name="externalEventStart" control={form.control}
                                   render={({field}) => (
                                       <FormItem>
                                           <FormLabel>External Start</FormLabel>
                                           <FormControl>
                                               <Input type="datetime-local" {...field}
                                                      className="input"/>
                                           </FormControl>
                                       </FormItem>
                                   )}
                        ></FormField>
                    </form>
                </Form>
                <div className="flex justify-end mt-5 space-x-2">
                    <Button variant="secondary" onClick={() => navigate('/')}>Cancel</Button>
                    <Button className="bg-primary-blue text-white"
                            disabled={!form.formState.isValid}
                            onClick={form.handleSubmit(onSubmit)}>Save</Button>
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;
