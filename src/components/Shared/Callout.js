import React from 'react';

import Card from './Card';
import Container from './Container';

import HeadshotImage from '../../images/headshot.jpg';
import MacbookImage from '../../images/macbook.jpeg';
import Today from '../../images/today.jpeg';

import './Callout.scss';

const pictureMap = {
    headshot: HeadshotImage,
    macbook: MacbookImage,
    today: Today
};

export const Callout = ({ title, paragraphs, calloutTheme, calloutInnerTheme, cardTheme, pictureTheme, pictureKey, overrides }) => {
    
    const calloutClass = calloutTheme ? `callout__outer-container callout__outer-container--${calloutTheme}` : 'callout__outer-container';
    const pictureClass = pictureTheme ? `callout__picture callout__picture--${pictureTheme}` : 'callout__picture';
    const innerContainerClass = calloutInnerTheme 
        ? `callout__inner-container callout__inner-container--${calloutInnerTheme}` 
        : 'callout__inner-container';

    const pictureComponent = pictureMap[pictureKey];

    const paragraphComponent = paragraphs.map((paragraph, i) => {
        return (
            <p key={i}>{paragraph}</p>
        );
    });

    return (
        <div className={calloutClass}>
            <Container>
                <div className={innerContainerClass}>
                    <img className={pictureClass} src={pictureComponent} alt="" />
                    <Card title={title} theme={cardTheme}>
                        {paragraphComponent}
                    </Card>
                </div>
            </Container>
        </div>
    );
};