import React, { useContext } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import SideNavigation from './header/side-navigation';
import { EventContext } from '../App';
import { cn } from '../lib/utils';

const MainLayout: React.FC<React.PropsWithChildren<Record<string, unknown>>> = ({children}) => {
	const eventContext = useContext(EventContext);	
	const classesInCaseOfEventSelected = "grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]";
	
	return (
	<div className={cn('', eventContext.event != null && classesInCaseOfEventSelected)}>
		{eventContext.event != null && <SideNavigation/>}
		<div className="flex flex-col sticky top-0">
			<Header/>
			<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 overflow-auto">
				{children}
			</main>
			<Footer/>
		</div>
	</div>
)};

export default MainLayout;
