import { connect } from 'react-redux';

import { Callout } from '../Shared';

const mapStateToProps = (state) => {
    return {
        title: `Programming.`,
        paragraphs: [
            'My first encounter with technology was when I was in elementary school and MSN Messenger first came out. I thought it was amazing that I could live chat with anyone around the world. I told myself that someday I wanted to work on something like that.',
            'When I came to the US, I started learning English while working as a legal assistant, life insurance sales agent, and ophthalmic technician. However, on the side I was constantly learning programming because I wanted to follow my dream.'
        ],
        calloutTheme: 'light',
        cardTheme: 'light'
    };
};

export default connect(mapStateToProps, null)(Callout);