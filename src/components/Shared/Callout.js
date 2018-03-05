import React from 'react';

import Card from './Card';

import './Callout.scss';

export const Callout = ({ title, paragraphs, calloutTheme, cardTheme }) => {
    
    const calloutClass = calloutTheme ? `callout__container callout__container--${calloutTheme}` : 'callout__container';

    const paragraphComponent = paragraphs.map((paragraph, i) => {
        return (
            <p key={i}>{paragraph}</p>
        );
    })

    return (
        <div className={calloutClass}>
            <div className="callout__picture"></div>
            <Card title={title} theme={cardTheme}>
                {paragraphComponent}
            </Card>
        </div>
    );
};