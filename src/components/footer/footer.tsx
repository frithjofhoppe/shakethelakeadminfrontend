import React from 'react';
import LanguageSelector from './language-selector';

const Footer: React.FC = () => {
	const logoPath = '../../assets/icons/ti-and-m-logo.svg';

	return (
		<div className="w-full bg-primary-blue-dark flex items-center justify-between px-6 py-1 md:py-2 h-10 md:h-12 lg:h-14 pt text-white">
			<img src={logoPath} alt="ti&m Logo" className="mr-2 p-1 h-full" />
			<LanguageSelector />
		</div>
	);
};

export default Footer;
