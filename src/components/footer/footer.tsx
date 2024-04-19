import React from 'react';
import { ReactComponent as ShakeTheLakeIcon } from '../../assets/icons/shake-the-lake-icon.svg';

const Footer: React.FC = () => {
    return (
        <div className="w-full bg-gradient-to-r from-sky-700 via-cyan-500 to-cyan-500 flex items-center justify-start px-6 py-8 h-32 md:h-36 lg:h-40 pt">
            <ShakeTheLakeIcon className="h-28 w-28 fill-white"/>
        </div>
    );
}

export default Footer;
