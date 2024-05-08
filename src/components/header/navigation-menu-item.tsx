import * as React from 'react';
import {NavLink} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {
	CalendarCheck2,
	CalendarDays,
	CalendarRange,
	ChevronDownIcon,
	ChevronRightIcon,
	FolderCog,
	Sailboat,
	ShieldAlertIcon,
	type LucideIcon,
} from 'lucide-react';
import {Button} from '../ui/button';
import {useState} from 'react';
import {cn} from '../../lib/utils';
import {NavigationEventDto} from '../../models/api/event.model';
import {eventDetailRoutes} from '../../constants';

export type MenuItemProperties = {
	labelKey: string;
	link: string;
	needsFullMatch: boolean;
	isMobileView?: boolean;
	icon?: LucideIcon;
	subNavigations?: MenuItemProperties[];
};

const SubNavigationMenuItem = (props: MenuItemProperties) => {
	const {t} = useTranslation();
	const isMobileView = props.isMobileView ?? false;
	const iconClass = isMobileView ? 'h-5 w-5' : 'h-4 w-4';
	const viewSpecificLinkClass = isMobileView
		? 'mx-[-0.65rem] gap-4 rounded-xl text-muted-foreground hover:text-foreground'
		: 'gap-3 rounded-lg hover:text-primary';
	const linkClass = cn(
		'flex items-center px-3 py-2 transition-all',
		viewSpecificLinkClass,
	);

	return (
		<NavLink
			to={props.link}
			end={props.needsFullMatch}
			className={({isActive, isPending, isTransitioning}) =>
				[
					isPending ? 'pending' : '',
					isActive
						? 'active bg-muted text-primary hover:bg-secondary'
						: 'text-muted-foreground',
					isTransitioning ? 'transitioning' : '',
				].join(' ') + linkClass
			}>
			<div className="flex items-center gap-3">
				<div className={iconClass} />
				{t(props.labelKey)}
			</div>
		</NavLink>
	);
};

const NavigationMenuItem = (props: MenuItemProperties) => {
	const {t} = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	const hasChildren =
		props.subNavigations?.length !== undefined &&
		props.subNavigations.length > 0;
	const childItems = hasChildren
		? props.subNavigations!.map((child) => (
				<SubNavigationMenuItem
					key={child.link}
					labelKey={child.labelKey}
					link={child.link}
				/>
			))
		: undefined;

	const isMobileView = props.isMobileView ?? false;
	const iconClass = isMobileView ? 'h-5 w-5' : 'h-4 w-4';
	const viewSpecificLinkClass = isMobileView
		? 'mx-[-0.65rem] gap-4 rounded-xl text-muted-foreground hover:text-foreground'
		: 'gap-3 rounded-lg hover:text-primary';
	const linkClass = cn(
		'flex items-center px-3 py-2 transition-all',
		viewSpecificLinkClass,
	);

	return (
		<>
			<NavLink
				to={props.link}
				end={props.needsFullMatch}
				className={({isActive, isPending, isTransitioning}) =>
					[
						isPending ? 'pending' : '',
						isActive
							? 'active bg-muted text-primary hover:bg-secondary'
							: 'text-muted-foreground',
						isTransitioning ? 'transitioning' : '',
					].join(' ') + linkClass
				}>
				<div className="flex items-center gap-3">
					{props.icon === undefined ? (
						<ShieldAlertIcon className={iconClass} />
					) : (
						<props.icon className={iconClass} />
					)}
					{t(props.labelKey)}
				</div>
				{hasChildren && (
					<Button
						variant="ghost"
						className="flex h-6 w-6 shrink-0 items-center justify-center -my-2 -mr-3 ml-auto py-4"
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							setIsOpen(!isOpen);
						}}>
						{isOpen ? (
							<ChevronDownIcon className="h-4 w-4 text-primary -m-4" />
						) : (
							<ChevronRightIcon className="h-4 w-4 text-primary -m-4" />
						)}
					</Button>
				)}
			</NavLink>
			{isOpen && <div className="grid">{childItems}</div>}
		</>
	);
};

export default NavigationMenuItem;

export function getNavigationItemsForEvent(
	event: NavigationEventDto,
): MenuItemProperties[] {
	const eventBasePath = '/event/' + event.id;
	return [
		{
			link: eventBasePath,
			labelKey: 'overview',
			icon: CalendarDays,
			needsFullMatch: true,
		},
		{
			link: `${eventBasePath}/${eventDetailRoutes.activityTypes}`,
			labelKey: 'activityTypes',
			icon: FolderCog,
			needsFullMatch: true,
			subNavigations: event.activityTypes.map((activity) => ({
				link: `${eventBasePath}/${eventDetailRoutes.activityTypes}/${activity.id}`,
				labelKey: activity.localizedName,
				needsFullMatch: true,
			})),
		},
		{
			link: `${eventBasePath}/${eventDetailRoutes.boats}`,
			labelKey: 'boats',
			icon: Sailboat,
			needsFullMatch: true,
			subNavigations: event.boats.map((boat) => ({
				link: `${eventBasePath}/${eventDetailRoutes.boats}/${boat.id}`,
				labelKey: boat.name,
				needsFullMatch: true,
			})),
		},
		{
			link: `${eventBasePath}/${eventDetailRoutes.schedule}`,
			labelKey: 'schedule',
			icon: CalendarRange,
			needsFullMatch: false,
		},
		{
			link: `${eventBasePath}/${eventDetailRoutes.bookings}`,
			labelKey: 'bookings',
			icon: CalendarCheck2,
			needsFullMatch: false,
		},
	];
}
