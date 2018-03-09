import { connect } from 'react-redux';

import { Callout } from '../Shared';

const mapStateToProps = (state) => {
    return {
        title: `Why Front-end?`,
        paragraphs: [
            `I love coding in HTML, CSS, and JavaScript.`,
            `I also enjoy doing visual design and user experience work and am constantly thinking of ways to improve the product I am working on.`,
            `I am a team-player and know that only when the best ideas are put forth can we create the best possible product.`
        ],
        calloutTheme: 'light',
        cardTheme: 'light'
    };
};

export default connect(mapStateToProps, null)(Callout);