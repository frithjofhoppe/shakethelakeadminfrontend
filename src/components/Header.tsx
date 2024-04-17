import React from 'react';
import {User} from "lucide-react";
import logo from '../../src/assets/icons/ti&m-logo.png';

import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "../@/components/ui/dropdown-menu";

const Header: React.FC = () => {
    return (
        <header className="w-full p-4 fixed left-0 flex">
            <img src={logo} alt="Website Logo" className="mr-2 ml-10 w-20 h-20"/>
            <div className="flex-grow"></div>

            <div className="flex justify-end mr-20">
                <DropdownMenu>
                    <DropdownMenuTrigger>Events</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Events</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>19.06.2023</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="flex justify-end">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <button className="focus:outline-none pr-10">
                            <User className="text-black cursor-pointer " size={24}/>
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <DropdownMenuItem onSelect={() => console.log('Profil')}>
                            <p className="text-base font-light leading-5 text-primary">Profil</p>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onSelect={() => console.log('Einstellungen')}>
                            <p className="text-base font-light leading-5 text-primary">Einstellungen</p>
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => console.log('Abmelden')}>
                            <p className="text-base font-light leading-5 text-primary">Abmelden</p>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}

export default Header;
