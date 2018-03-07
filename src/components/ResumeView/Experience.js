import React from 'react';

import './Experience.scss';

export const Experience = ({ time, title, location, position, paragraph }) => {
    return (
        <div className="d-flex mt-32">
            <div className="experience__time">{time}</div>
            <div>
                <div>
                    <span className="experience__title">{title}</span>
                    <span className="text-primary">{location}</span>
                </div>
                <p className="experience__title experience__title--italic">{position}</p>
                <div>{paragraph}</div>
            </div>
        </div>
    );
};

export default Experience;