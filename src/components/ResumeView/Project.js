import React from 'react';

import './Project.scss';

export const Project = ({ time, title, companyName, projectDescrition, technology }) => {

    return (
        <div className="d-flex mt-32">
            <div className="project__time">{time}</div>
            <div>
                <span className="project__title--dark">{title}</span>
                <span className="text-primary">{companyName}</span>
                <p className="text-primary">{projectDescrition}</p>
                <p className="font-italic text-gray">{technology}</p>
            </div>
        </div>
    );
};

export default Project;