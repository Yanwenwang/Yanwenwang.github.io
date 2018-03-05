import React from 'react';

import './Card.scss';

export const Card = ({ title, theme, children }) => {

    const cardClass = theme ? `card__title card__title--${theme}` : 'card__title';

    return (
        <div className="card">
            <h1 className={cardClass}>{title}</h1>
            <div className="card__content">
                {children}
            </div>
        </div>
    );
};

export default Card;