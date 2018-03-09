import React from 'react';

import BackgroundCalloutContainer from './BackgroundCalloutContainer';
import ProgrammingCalloutContainer from './ProgrammingCalloutContainer';
import TodayCalloutContainer from './TodayCalloutContainer';

export const HomeView = () => {
    return (
        <React.Fragment>
            <BackgroundCalloutContainer />
            <ProgrammingCalloutContainer />
            <TodayCalloutContainer />
        </React.Fragment>
    );
};

export default HomeView;