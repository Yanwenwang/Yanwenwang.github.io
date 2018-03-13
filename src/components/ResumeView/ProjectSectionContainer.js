import { connect } from 'react-redux';

import ProjectSection from './ProjectSection';

const mapStateToProps = (state) => {
    return {
        projects: [{
            time: 'Jan 2017 - Nov 2017',
            title: 'Merchant Portal for AR Mobile App, ',
            companyName: 'Manifold Technology',
            projectDescrition: 
                'Created a merchant portal which allowed merchants to create items for sale in real-time for a limited duration   which would then show up on an AR mobile app. This involved integrating with AWS Cognito to allow for passwordless flows for signup and login as well as creating a complex UI with a map and information panels that were synchronized.',
            
            technology: 
                'Relevant Technologies: JavaScript, HTML, CSS, React, Redux, ES6, Bootstrap, SASS, Babel, Webpack, Git, Sublime Text,   Mocha, Chai, Sinon, fetch, Jenkins'
        }, {
            time: 'Aug 2015 - Nov 2017',
            title: 'Blockchain Asset Trading Platform, ',
            companyName: 'Manifold Technology',
            projectDescrition: 
                'Worked on a platform that allowed agents, dealers, traders, and brokers to exchange assets using Blockchain technology. This involved creating a D3 directed graph visualization which allowed users to create, update, exchange, and delete assets as well as create relationships between them.', 
            
            technology: 
                'Relevant Technologies: JavaScript, HTML, CSS, AngularJS, Bootstrap, D3.js, SASS, Media Queries, Gulp, Git, Browsersync,   SourceTree, Postman, Sketch, Jasmine, Jenkins'
        }]
    };
};

export default connect(mapStateToProps, null)(ProjectSection);