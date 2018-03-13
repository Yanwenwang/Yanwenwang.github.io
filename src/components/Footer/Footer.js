import React from 'react';

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer__container">
            <p className="footer__license">Copyright © 2018 Yanwen Wang</p>
            <div>
                <a href="https://www.linkedin.com/in/yanwenwang" target="_blank" className="footer__icon">
                    <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/Yanwenwang" target="_blank" className="footer__icon">
                    <i className="fa fa-github fa-3x" aria-hidden="true"></i>
                </a>
                <a href="https://www.instagram.com/ywphotos" target="_blank" className="footer__icon footer__icon--last">
                    <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
                </a>
            </div>
        </footer>
    )
};

export default Footer;