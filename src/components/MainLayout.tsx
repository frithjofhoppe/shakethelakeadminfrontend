import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import SideNavigation from './header/sidenavigation';

const MainLayout: React.FC<React.PropsWithChildren<Record<string, unknown>>> = ({children}) => (
	<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
		<SideNavigation/>
		<div className="flex flex-col sticky top-0">
			<Header/>
			<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 overflow-auto">
				{children}
			</main>
			<Footer/>
		</div>
	</div>
);

export default MainLayout;
