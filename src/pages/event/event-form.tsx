import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel} from "../../@/components/ui/form";
import {Input} from "../../@/components/ui/input";
import {Button} from "../../@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {EventDto} from "../../models/api/event.model";
import {createEvent} from "../../services/EventService";

const formSchema = z.object({
        title: z.string().min(5).max(20),
        description: z.string(),
        date: z.string(),
        internalEventStart: z.string(),
        externalEventStart: z.string(),
        location: z.string()
    }
);

const EventForm: React.FC = () => {
    const navigate = useNavigate();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: 'Sommer Event 2024',
            description: '',
        },
        mode: 'onChange'
    });

    const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (values) => {
        const event: EventDto = {
            id: 0,
            title: values.title,
            description: values.description,
            location: values.location,
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
        <div className="fixed inset-0 flex items-center justify-center p-4">
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
                                               <Input type="datetime-local" {...field} className="input"/>
                                           </FormControl>
                                       </FormItem>
                                   )}></FormField>
                        <FormField name="externalEventStart" control={form.control}
                                   render={({field}) => (
                                       <FormItem>
                                           <FormLabel>External Start</FormLabel>
                                           <FormControl>
                                               <Input type="datetime-local" {...field} className="input"/>
                                           </FormControl>
                                       </FormItem>
                                   )}
                        ></FormField>
                    </form>
                </Form>
                <div className="flex justify-end mt-5 space-x-2">
                    <Button variant="secondary" onClick={() => navigate('/')}>Cancel</Button>
                    <Button disabled={!form.formState.isValid}
                            onClick={form.handleSubmit(onSubmit)}>Save</Button>
                </div>
            </div>
        </div>
    );
};

export default EventForm;
