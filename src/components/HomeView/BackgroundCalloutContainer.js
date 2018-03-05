import { connect } from 'react-redux';

import { Callout } from '../Shared';

const mapStateToProps = (state) => {
    return {
        title: `Hi, I'm Yanwen.`,
        paragraphs: [
            `I am a front end developer that enjoys coding in HTML, CSS, and JavaScript. I also love doing design work as well and will jump into photoshop to touch up images.`,
            `It's really nice to meet you!`
        ]
    };
};

export default connect(mapStateToProps, null)(Callout);