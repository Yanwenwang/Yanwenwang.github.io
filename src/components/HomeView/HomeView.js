import React from 'react';

import BackgroundCalloutContainer from './BackgroundCalloutContainer';
import ProgrammingCalloutContainer from './ProgrammingCalloutContainer';

export const HomeView = () => {
    return (
        <React.Fragment>
            <BackgroundCalloutContainer />
            <ProgrammingCalloutContainer />
        </React.Fragment>
    );
};

export default HomeView;