import { connect } from 'react-redux';

import ExperienceSection from './ExperienceSection';

const mapStateToProps = (state) => {
    return {
        experiences: [{
            time: 'Aug 2015 - Nov 2017',
            title: 'Manifold Technology',
            location: 'Sunnyvale, CA',
            position: 'Front-end Developer',
            paragraph: [
                'As a front-end developer I was responsible for creating and maintaining over 10 different web applications using Angular   and more recently, React and Redux. These applications ranged from an asset trading platform, a security visualization platform, and a permissions management platform and spanned multiple industries such as finance, energy, and security.',

                'I collaborated closely with the CEO, CTO, product manager, visual designer, and other engineers to quickly iterate and incorporate user feedback in the various web applications I was supporting. I also provided creative input and insight to make our products amazing. The projects I created helped the company secure their first customer and were used as a demonstration of the power and capability we could offer.'
            ]
        }, {
            time: 'Apr 2014 - Oct 2014',
            title: 'The Eye Institute of Silicon Valley, ',
            location: 'Los Altos, CA',
            position: 'Ophthalmic Technician',
            paragraph: [
                'As a ophthalmic technician, I performed basic medical assistant tasks such as greeting patients, scheduling appointments, and coordinating surgery. I was also responsible for billing, collecting co-payments and entering claims.',

                'I also performed various diagnostic tests such as visual field, optical coherence tomography, photo fundus, A-scan, and fluorescein angiography. I also helped patients with basic vision checks such as eye pressure, auto refraction, vision chart, and pachymetry.'
            ]
        }, {
            time: 'Nov 2012 - Apr 2014',
            title: 'AIG, ',
            location: 'San Jose, CA',
            position: 'Insurance Sales Agent',
            paragraph: [
                'As an insurance sales agent, I was responsible for prospecting clients which involved handing out flyers, making lots of cold calls (got lots of rejections), and setting up information booths. I made my own marketing materials which involved creating a radio advertisement and making my own flyers and business cards.',

                'In addition, I also interviewed clients to obtain data about their financial resources and needs, as well as discuss any existing coverage. Afterwards, I customized insurance programs to suit each client to provide appropriate coverage. I closed over a dozen deals and was awarded a quarterly top salesperson award.'
            ]   
        }, {
            time: 'May 2012 - Aug 2012',
            title: 'The Law Offices of David Yao, ',
            location: 'Milpitas, CA',
            position: 'Legal Assistant',
            paragraph: [
                'As a legal assistant, I helped the lawyer with tasks such as collecting and sorting exhibits as well as ensuring all documentation was correctly prepared for final court submission. In addition, I assisted clients in applying for green cards which included filling out forms, paying bills and verifying qualifications. I was also responsible for answering phone calls in English, Mandarin and Cantonese.'
            ]
        }]
    };
};

export default connect(mapStateToProps, null)(ExperienceSection);