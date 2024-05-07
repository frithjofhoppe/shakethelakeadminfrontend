import * as React from 'react';

import {
	CalendarDays,
	FolderCog,
	Sailboat,
	CalendarRange,
	CalendarCheck2,
} from 'lucide-react';
import {Badge} from '../ui/badge';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const SideNavigation: React.FC = () => {
	const {t} = useTranslation();
	const logoPath = '../../../src/assets/icons/shake-the-lake-icon.svg';

	return (
		<div className="hidden md:block">
			<div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
				<div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
					<Link to="/" className="flex items-center gap-2 font-semibold">
						<img src={logoPath} alt="Website Logo" className="mr-2 h-10 w-10" />
						<span className="heading-xs">shake the lake</span>
					</Link>
				</div>
				<div className="flex-1 border-r">
					<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
						<Link
							to="#"
							className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
							<CalendarDays className="h-4 w-4" />
							{t('overview')}
						</Link>
						<Link
							to="#"
							className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
							<FolderCog className="h-4 w-4" />
							{t('activityTypes')}
							<Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
								6
							</Badge>
						</Link>
						<Link
							to="#"
							className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary">
							<Sailboat className="h-4 w-4" />
							{t('Boats')}
						</Link>
						<Link
							to="#"
							className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
							<CalendarRange className="h-4 w-4" />
							{t('schedule')}
						</Link>
						<Link
							to="#"
							className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
							<CalendarCheck2 className="h-4 w-4" />
							{t('bookings')}
						</Link>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default SideNavigation;
