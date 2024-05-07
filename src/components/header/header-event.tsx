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

// Todo! remove next/link, replace with the react-router-dom things
// todo! translate all texts

const EventNavigationElements = () => {
	const {t} = useTranslation();
	const logoPath = '../../../src/assets/icons/shake-the-lake-icon.svg';

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
					<Link
						to="#"
						className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
						<CalendarDays className="h-5 w-5" />
						{t('overview')}
					</Link>
					<Link
						to="#"
						className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground">
						<FolderCog className="h-5 w-5" />
						{t('activityTypes')}
						<Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
							6
						</Badge>
					</Link>
					<Link
						to="#"
						className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
						<Sailboat className="h-5 w-5" />
						{t('Boats')}
					</Link>
					<Link
						to="#"
						className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
						<CalendarRange className="h-5 w-5" />
						{t('schedule')}
					</Link>
					<Link
						to="#"
						className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
						<CalendarCheck2 className="h-5 w-5" />
						{t('bookings')}
					</Link>
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
