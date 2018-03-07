import React from 'react';

import Education from './Education';

const EducationSection = ({ educations }) => {
    
    const educationComponent = educations.map((education, i) => {
        return (
            <Education {...education} key={i} />
        );
    });

    return (
        <div>
            <h4 className="text-primary text-uppercase">Education</h4>
            {educationComponent}
        </div>
    );
};

export default EducationSection;