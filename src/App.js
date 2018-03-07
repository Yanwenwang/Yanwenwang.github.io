import React from 'react';
import { Route } from 'react-router-dom';

import CoreLayout from './layouts/CoreLayout';
import Home from './components/HomeView/HomeView';
import Resume from './components/ResumeView/ResumeView'; 

const App = () => (
    <main>
        <CoreLayout>
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
        </CoreLayout>
    </main>
);

export default App;