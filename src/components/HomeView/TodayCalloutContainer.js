import { connect } from 'react-redux';

import { Callout } from '../Shared';

const mapStateToProps = (state) => {
    return {
        title: 'Today.',
        pictureKey: 'today',
        paragraphs: [
            `I've been working as a front-end developer for more than 2 years now.`,
            `I've delivered over 10 projects ranging from an asset trading platform, a security visualization platform, and a permissions management platform.`,
            `I'm very excited for the future!`
        ],
        calloutTheme: 'picture',
        cardTheme: 'dark',
        pictureTheme: 'large',
        calloutInnerTheme: 'reversed'
    };
};

export default connect(mapStateToProps, null)(Callout);