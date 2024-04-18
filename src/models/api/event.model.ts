export interface EventDto {
    id: number;
    title: string;
    description: string;
    location: Location;
    date: string;
    customerCode: string;
    employeeCode: string;
    customerOnlyTime: string;
    isStarted: boolean;
    startedAt: string;
    endedAt: string;
}

export interface Location {
    name: string;
    street: string;
    streetNr: string;
    postalCode: number;
    town: string;
    canton: string;
}
