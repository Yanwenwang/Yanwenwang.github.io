import React from 'react';

import Card from './Card';
import Container from './Container';

import './Callout.scss';

export const Callout = ({ title, paragraphs, calloutTheme, cardTheme }) => {
    
    const calloutClass = calloutTheme ? `callout__outer-container callout__outer-container--${calloutTheme}` : 'callout__outer-container';

    const paragraphComponent = paragraphs.map((paragraph, i) => {
        return (
            <p key={i}>{paragraph}</p>
        );
    })

    return (
        <div className={calloutClass}>
            <Container>
                <div className="callout__inner-container">
                    <div className="callout__picture"></div>
                    <Card title={title} theme={cardTheme}>
                        {paragraphComponent}
                    </Card>
                </div>
            </Container>
        </div>
    );
};