import * as React from 'react';

import {Link} from 'react-router-dom';
import NavigationMenuItem from './navigation-menu-item';
import {iconPaths} from '../../constants';
import {useTranslation} from 'react-i18next';
import {
	type NavigationEventDto,
	getNavigationItemsForEvent,
} from './navigation-models';

const SideNavigation: React.FC = () => {
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
			<NavigationMenuItem key={item.link} {...item} isMobileView={false} />
		),
	);

	return (
		<div className="hidden md:block">
			<div className="flex h-full max-h-screen flex-col sticky top-0">
				<div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
					<Link to="/" className="flex items-center gap-2 font-semibold">
						<img
							src={iconPaths.shakeTheLake}
							alt={t('shakeTheLake')}
							className="mr-2 h-10 w-10"
						/>
						<span className="heading-xs">{t('shakeTheLake')}</span>
					</Link>
				</div>
				<div className="flex-1 border-r">
					<nav className="grid items-start px-2 mt-4 text-sm font-medium lg:px-4">
						{navigationItems}
					</nav>
				</div>
			</div>
		</div>
	);
};

export default SideNavigation;
