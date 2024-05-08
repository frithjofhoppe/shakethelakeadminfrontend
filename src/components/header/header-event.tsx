import React from 'react';
import {
	CalendarCheck2,
	CalendarDays,
	CalendarRange,
	FolderCog,
	Menu,
	Sailboat,
} from 'lucide-react';
import {Button} from '../ui/button';
import {Sheet, SheetContent, SheetTrigger} from '../ui/sheet';
import {Badge} from '../ui/badge';
import {Link, useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import NavigationMenuItem, {
	getNavigationItemsForEvent,
} from './navigation-menu-item';
import {NavigationEventDto} from '../../models/api/event.model';

// Todo! remove next/link, replace with the react-router-dom things
// todo! translate all texts

const EventNavigationElements = () => {
	const {t} = useTranslation();
	const logoPath = '../../../src/assets/icons/shake-the-lake-icon.svg';

	// todo! need add this centralized, able to be loaded once from backend
	const exampleEvent: NavigationEventDto = {
		id: 2,
		title: 'Example Event 2024',
		activityTypes: [{id: 1, localizedName: 'Wakeboarding'}],
		boats: [
			{id: 1, name: 'This is not actually a key'},
			{id: 2, name: 'Poseidon'},
		],
	};

	const navigationItems = getNavigationItemsForEvent(exampleEvent).map(
		(item) => (
			<NavigationMenuItem key={item.link} {...item} isMobileView={true} />
		),
	);

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" size="icon" className="shrink-0 md:hidden">
					<Menu className="h-5 w-5" />
					<span className="sr-only">Toggle navigation menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="flex flex-col">
				<nav className="grid gap-2 text-lg font-medium">
					<Link
						to="#"
						className="flex items-center gap-2 text-lg font-semibold">
						<img src={logoPath} alt="Website Logo" className="mr-2 h-10 w-10" />
						<span className="heading-xs">{t('shakeTheLake')}</span>
					</Link>
					{navigationItems}
				</nav>
			</SheetContent>
		</Sheet>
	);
};

const HeaderEvent: React.FC = () => {
	const {t} = useTranslation();
	const navigate = useNavigate();

	return (
		<header className="flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6 backdrop-blur sticky top-0">
			<EventNavigationElements />
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

export default HeaderEvent;
