import React from 'react';

import BackgroundCalloutContainer from './BackgroundCalloutContainer';
import ProgrammingCalloutContainer from './ProgrammingCalloutContainer';
import Footer from '../Footer/Footer';

export const HomeView = () => {
    return (
        <React.Fragment>
            <BackgroundCalloutContainer />
            <ProgrammingCalloutContainer />
            <Footer />
        </React.Fragment>
    );
};

export default HomeView;