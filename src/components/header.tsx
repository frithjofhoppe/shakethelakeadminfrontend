import React from 'react';
import {User} from "lucide-react";
import logo from '../../src/assets/icons/ti&m-logo.png';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
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
                        <DropdownMenuSeparator/>
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
                    <DropdownMenuContent>
                        <DropdownMenuItem onSelect={() => console.log('Profil')}>
                            <p>Profil</p>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onSelect={() => console.log('Einstellungen')}>
                            <p>Einstellungen</p>
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => console.log('Abmelden')}>
                            <p>Abmelden</p>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}

export default Header;
