import React from 'react';

import { Container } from '../Shared';

import ProjectSectionContainer from './ProjectSectionContainer';
import ExperienceSectionContainer from './ExperienceSectionContainer';
import EducationSectionContainer from './EducationSectionContainer';

const ResumeView = () => (
    <Container>
        <ProjectSectionContainer />
        <ExperienceSectionContainer />
        <EducationSectionContainer />
    </Container>
);

export default ResumeView;