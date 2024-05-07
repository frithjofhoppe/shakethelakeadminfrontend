import React from 'react';
import {Button} from '../ui/button';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import HeaderLogo from './header-logo';

// Todo! remove next/link, replace with the react-router-dom things
// todo! only show lower sidebar parts when navigated to event

const HeaderDefault: React.FC = () => {
	const {t} = useTranslation();
	const navigate = useNavigate();

	return (
		<header className="flex h-14 items-center gap-4 border-b pr-4 lg:h-[60px] lg:pr-6 backdrop-blur sticky top-0">
			<HeaderLogo />
			<div className="w-full flex-1"></div>
			<Button
				variant="link"
				className="heading-xs"
				onClick={() => {
					navigate('/');
				}}>
				{t('events')}
			</Button>
		</header>
	);
};

export default HeaderDefault;
