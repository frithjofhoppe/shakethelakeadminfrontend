import * as React from 'react';

import {CalendarDays, FolderCog, Sailboat, CalendarRange, CalendarCheck2} from 'lucide-react';
import {Badge} from '../ui/badge';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import { EventContext } from '../../App';
import { useContext } from 'react';
import HeaderLogo from './header-logo';

const EventNavigationElements = () => {
	const {t} = useTranslation();

	return (
		<div className="flex-1 border-r">
			<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
				<Link to="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
					<CalendarDays className="h-4 w-4" />
					{t('Overview')}
				</Link>
				<Link to="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
					<FolderCog className="h-4 w-4" />
					{t('ActivityTypes')}
					<Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
					6
					</Badge>
				</Link>
				<Link to="#" className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary">
					<Sailboat className="h-4 w-4" />
					{t('Boats')}
				</Link>
				<Link to="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
					<CalendarRange className="h-4 w-4" />
					{t('Schedule')}
				</Link>
				<Link to="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
					<CalendarCheck2 className="h-4 w-4" />
					{t('Bookings')}
				</Link>
			</nav>
		</div>
	);
}

const SideNavigation: React.FC = () => {
	const eventContext = useContext(EventContext);

	return (
		<div className="hidden md:block">
			<div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
				{eventContext.event != null && <HeaderLogo />}
				{eventContext.event != null && <EventNavigationElements />}
			</div>
		</div>
	);
};

export default SideNavigation;