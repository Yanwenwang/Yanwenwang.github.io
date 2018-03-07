import { connect } from 'react-redux';

import EducationSection from './EducationSection';

const mapStateToProps = (state) => {
    return {
        educations: [
            {
                time: 'Nov 2014 - Jul 2014',
                title: 'Online Education (Front-end Development)',
                description: 'Udacity, Khan Academy, W3Schools, Codecademy, PluralSight, Eloquent JavaScript, and JavaScript the Good Parts'
            },{
                time: 'Jan 2013 - Dec 2013',
                title: 'Ohlone College',
                description: 'English classes'

            },{
                time: 'Sep 2008 - Jun 2011',
                title: 'Guangzhou City Construction College',
                description: 
                    'Coursework included statistics, probability, game theory, securities analysis, finance, economics, accounting, insurance, and investment banking.'
            }
        ]
    };
};

export default connect(mapStateToProps, null)(EducationSection);