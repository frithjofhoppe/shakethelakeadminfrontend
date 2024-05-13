import React from 'react';
import SideNavigation from './navigation/side-navigation';
import {Outlet} from 'react-router-dom';
import HeaderEvent from './header/header-event';
import Footer from './footer/footer';

const EventDetailLayout: React.FC = () => (
	<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
		<SideNavigation />
		<div className="flex flex-col">
			<HeaderEvent />
			<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 overflow-auto">
				<Outlet />
			</main>
			<Footer />
		</div>
	</div>
);

export default EventDetailLayout;
