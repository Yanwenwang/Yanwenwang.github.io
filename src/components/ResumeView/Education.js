import React from 'react';

import './Education.scss';

export const Education = ({time, title, description}) => {
    return (
        <div className="education__container">
            <div className="education__time">{time}</div>
            <div>
                <div className="education__title">{title}</div>
                <p className="text-primary font-italic lh-15">{description}</p>
            </div>
        </div>
    );
};

export default Education;