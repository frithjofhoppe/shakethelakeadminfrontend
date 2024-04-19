import React from 'react';
import Header from "./header/header";
import Footer from "./footer/footer";

const MainLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="flex-grow">
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;
