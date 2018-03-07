import React from 'react';

import Experience from './Experience';

const ExperienceSection = ({ experiences }) => {

    const experienceComponent = experiences.map((experience, i) => {
        return (
            <Experience {...experience} key={i} />
        );
    });

    return (
        <div>
            <h4 className="text-primary text-uppercase">Experience</h4>
            {experienceComponent}
        </div>
    );
};

export default ExperienceSection;