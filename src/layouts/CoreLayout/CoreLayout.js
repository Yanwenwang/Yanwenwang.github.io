import React from 'react';

import '../../styles/core.scss';

import Navbar from '../../components/Navbar/Navbar';

export const CoreLayout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            {children}
        </React.Fragment>
    );
}

export default CoreLayout;