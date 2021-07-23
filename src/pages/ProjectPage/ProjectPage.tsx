import React from 'react';
import './_ProjectPage.scss';

export interface ProjectPageProps {
    heroImageSrc: string;
    contentText: string;
}

const ProjectPage = ({ heroImageSrc, contentText }: ProjectPageProps) => (
    <div className="project-page__container">
        <img src={heroImageSrc} alt="project hero" />
        <div className="project-page__text-content">{contentText}</div>
    </div>
);

export default ProjectPage;
