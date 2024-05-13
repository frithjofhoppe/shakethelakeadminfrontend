import React from 'react';
import {Menu} from 'lucide-react';
import {Button} from '../ui/button';
import {Sheet, SheetContent, SheetTrigger} from '../ui/sheet';
import {Link, useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import NavigationMenuItem from '../navigation/navigation-menu-item';
import {iconPaths} from '../../constants';
import {
	type NavigationEventDto,
	getNavigationItemsForEvent,
} from '../navigation/navigation-models';

// Todo! remove next/link, replace with the react-router-dom things
// todo! translate all texts
// todo! display event name as context somewhere, depending on design decisions

const EventNavigationElements = () => {
	const {t} = useTranslation();

	// Todo! need add this centralized, able to be loaded once from backend
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
						to="/"
						className="flex items-center gap-2 text-lg font-semibold">
						<img
							src={iconPaths.shakeTheLake}
							alt="Website Logo"
							className="mr-2 h-10 w-10"
						/>
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
