import React from 'react';
import { ReactComponent as ShakeTheLakeIcon } from '../../assets/icons/shake-the-lake-white.svg';

const Footer: React.FC = () => {
    return (
        <div
            className="w-full bg-gradient-to-r from-sky-700 via-cyan-500 to-cyan-500 flex items-center justify-start px-10 py-8 h-32 md:h-36 lg:h-40 pt text-white">
            <ShakeTheLakeIcon className="h-28 w-28"/>
        </div>
    );
}

export default Footer;