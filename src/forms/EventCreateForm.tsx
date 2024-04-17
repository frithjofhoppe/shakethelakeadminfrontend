import React from "react";
import {FormControl, FormField, FormItem, FormLabel,} from "../@/components/ui/form";
import {Input} from "../@/components/ui/input";
import {FormProvider, useForm} from "react-hook-form";
import {Button} from "../@/components/ui/button";
import {useNavigate} from "react-router-dom";
import LocationForm from "./LocationForm";

    const EventForm: React.FC = () => {
    const form = useForm();
    const navigate = useNavigate();

    const onSubmit = form.handleSubmit((data) => {
        console.log(data);
        navigate('/');
    });

    const onDiscard = () => {
        navigate('/');
    };

    return (
        <FormProvider {...form}>
            <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4 justify-center">
                <div className="w-1/3 bg-white shadow-lg rounded-lg p-8">
                    <h1 className="self-start text-4xl font-bold mb-6">Create new Event</h1>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({field}) => (
                            <FormItem className="mt-6">
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({field}) => (
                            <FormItem className="mt-6">
                                <FormLabel>Short Description</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="date"
                        render={({field}) => (
                            <FormItem className="mt-6">
                                <FormLabel>Date</FormLabel>
                                <FormControl>
                                    <Input {...field} type="date"/>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="internalEventStart"
                        render={({field}) => (
                            <FormItem className="mt-6">
                                <FormLabel>Internal Event Start</FormLabel>
                                <FormControl>
                                    <Input {...field} type="datetime-local"/>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="externalEventStart"
                        render={({field}) => (
                            <FormItem className="mt-6">
                                <FormLabel>External Event Start</FormLabel>
                                <FormControl>
                                    <Input {...field} type="datetime-local"/>
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <LocationForm />

                    <div className="flex justify-end space-x-4 mt-4">
                        <Button onClick={onDiscard}
                                className="bg-gray-300 hover:bg-gray-400 text-black">Discard
                            Changes</Button>
                        <Button onClick={onSubmit}
                                className="bg-blue-500 hover:bg-blue-700 text-white">Save</Button>
                    </div>
                </div>
            </div>
        </FormProvider>
    );
};

export default EventForm;
