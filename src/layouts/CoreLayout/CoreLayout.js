import React from 'react';

import '../../styles/core.scss';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export const CoreLayout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            {children}
            <Footer />
        </React.Fragment>
    );
}

export default CoreLayout;