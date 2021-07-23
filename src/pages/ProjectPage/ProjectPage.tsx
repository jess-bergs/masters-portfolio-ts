import React from 'react';
import './_ProjectPage.scss';

export interface ProjectPageProps {
    heroImageSrc: string;
    contentText: string;
}

const ProjectPage = ({ heroImageSrc, contentText }: ProjectPageProps) => (
    <div className="project-page__container">
        <div
            className="project-page__hero-image"
            data-testid="hero-image"
            style={{ backgroundImage: `url(${heroImageSrc})` }}
        />
        <div className="project-page__text-content">{contentText}</div>
    </div>
);

export default ProjectPage;
