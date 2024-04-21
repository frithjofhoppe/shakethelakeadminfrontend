import React from 'react';
import Header from "./header/header";
import Footer from "./footer/footer";

const MainLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div className="flex flex-col overflow-hidden">
            <Header/>
            <div className="flex-grow overflow-auto">
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;
