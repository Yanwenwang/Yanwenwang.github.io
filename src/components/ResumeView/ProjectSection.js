import React from 'react';

import Project from './Project';

const ProjectSection = ({ projects }) => {

    const projectComponent = projects.map((project, i) => {
        return (
            <Project {...project} key={i} />
        );
    });

    return (
        <div>
            <h4 className="text-primary text-uppercase">Projects</h4>
            {projectComponent}
        </div>
    );
};

export default ProjectSection;