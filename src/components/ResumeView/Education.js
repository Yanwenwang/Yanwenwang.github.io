import React from 'react';

import './Education.scss';

export const Education = ({time, title, description}) => {
    return (
        <div className="d-flex mt-32">
            <div className="education__time">{time}</div>
            <div>
                <div className="education__title">{title}</div>
                <p className="text-primary font-italic">{description}</p>
            </div>
        </div>
    );
};

export default Education;