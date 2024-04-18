import React from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {FormControl, FormField, FormItem, FormLabel} from "../../@/components/ui/form";
import {Input} from "../../@/components/ui/input";

const LocationForm: React.FC = () => {
    const form = useForm();
    return (
        <FormProvider {...form}>
            <div className="bg-white p-4 shadow rounded-lg mt-6">
                <p className="font-bold text-lg mb-4">Location Details</p>

                {/* eslint-disable-next-line react/jsx-no-undef */}
                <FormField
                    control={form.control}
                    name="town"
                    render={({field}) => (
                        <FormItem className="mt-6">
                            <FormLabel>Town</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="street"
                    render={({field}) => (
                        <FormItem className="mt-6">
                            <FormLabel>Street</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="zip"
                    render={({field}) => (
                        <FormItem className="mt-6">
                            <FormLabel>Postal Code</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </div>
        </FormProvider>
    );
};

export default LocationForm;
