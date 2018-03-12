import React from 'react';

import '../../styles/core.scss';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export const CoreLayout = ({ children }) => {
    return (
        <React.Fragment>
            <div className="wrapper">
                <Navbar />
                {children}
                <div className="push"></div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default CoreLayout;