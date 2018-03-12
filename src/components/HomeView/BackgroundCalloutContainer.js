import { connect } from 'react-redux';

import { Callout } from '../Shared';

const mapStateToProps = (state) => {
    return {
        title: `Hi, I'm Yanwen.`,
        pictureKey: 'headshot',
        paragraphs: [
            `Hi, my name is Yanwen, some people call me Yan for short.`,
            `I am a passionate and experienced front-end developer. My current technology focus is React and Redux although I also have significant experience in AngularJS as well.`,
            `It's really nice to meet you.`
        ],
        pictureTheme: 'large',
        calloutInnerTheme: 'reversed'
    };
};

export default connect(mapStateToProps, null)(Callout);