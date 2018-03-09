import { connect } from 'react-redux';

import { Callout } from '../Shared';

const mapStateToProps = (state) => {
    return {
        title: 'Today.',
        paragraphs: [
            `I've been working as a front-end developer for more than 2 years now.`,
            `I've delivered over 10 projects ranging from an asset trading platform, a security visualization platform, and a permissions management platform.`,
            `I'm very excited for the future!`
        ],
        calloutTheme: 'dark',
        cardTheme: 'dark'
    };
};

export default connect(mapStateToProps, null)(Callout);