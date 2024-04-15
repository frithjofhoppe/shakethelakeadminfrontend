import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header/>
            {
                <>
                    <h1> TEST H1</h1>
                    <h2> TEST H2</h2>
                    <h3> TEST H3</h3>
                    <h4> TEST H4</h4>
                    <h5> TEST H5</h5>
                    <p className="p-xl">Test Paragraph XL</p>
                    <p className="p-l">Test Paragraph L</p>
                    <p className="p-m">Test Paragraph M</p>
                    <p className="p-s">Test Paragraph S</p>
                    <p className="p-s-light">Test Paragraph S Light</p>
                    <p className="p-xs">Test Paragraph XS</p>
                </>
            }
            <Footer/>
        </div>
    );
}
export default HomePage;
