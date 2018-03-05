import React from 'react';
import { Route } from 'react-router-dom';

import CoreLayout from './layouts/CoreLayout';
import Home from './components/HomeView/HomeView';
import About from './components/AboutView/AboutView'; 

const App = () => (
    <main>
        <CoreLayout>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
        </CoreLayout>
    </main>
);

export default App;