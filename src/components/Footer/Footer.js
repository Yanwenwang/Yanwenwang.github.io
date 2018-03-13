import React from 'react';

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer__container">
            <p className="footer__license">Copyright © 2018 Yanwen Wang</p>
            <div>
                <a href="https://www.linkedin.com/in/yanwenwang" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square fa-2x footer__icon footer__icon--linkedin" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/Yanwenwang" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github fa-2x footer__icon footer__icon--github" aria-hidden="true"></i>
                </a>
                <a href="https://www.instagram.com/ywphotos" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-instagram fa-2x footer__icon footer__icon--instagram" aria-hidden="true"></i>
                </a>
            </div>
        </footer>
    )
};

export default Footer;