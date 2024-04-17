import React from 'react';
import { ReactComponent as ShakeTheLakeIcon } from '../assets/icons/shake-the-lake-icon.svg';

const Footer: React.FC = () => {
    return (
        <div
            className="w-full h-[160px] fixed bottom-0 bg-gradient-to-r from-sky-700 via-cyan-500 to-cyan-500 flex items-center justify-start p-4">
            <ShakeTheLakeIcon className="h-28 w-28 fill-white "/>
        </div>
    );
}

export default Footer;
