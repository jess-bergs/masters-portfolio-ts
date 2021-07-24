import React from 'react';
import ProjectHeader, { ProjectHeaderProps } from '../../components/ProjectHeader/ProjectHeader';
import ProjectSpecs, { ProjectSpecsProps } from '../../components/ProjectSpecs/ProjectSpecs';
import './_ProjectPage.scss';
import iconLinkedIn from '../../assets/images/icons/icon_linkedin_neg.svg';

export interface ProjectPageProps {
    heroImageSrc: string;
    textContent: string;
    headerContent: ProjectHeaderProps;
    specsContent: ProjectSpecsProps;
}

const ProjectPage = ({
    heroImageSrc,
    headerContent,
    textContent,
    specsContent,
}: ProjectPageProps) => (
    <div className="project-page__container">
        <div
            className="project-page__hero-image"
            data-testid="hero-image"
            style={{ backgroundImage: `url(${heroImageSrc})` }}
        />
        <div className="project-page__contents">
            <ProjectHeader {...headerContent} />
            <div className="project-page__text-content">{textContent}</div>
            <ProjectSpecs {...specsContent} />
        </div>
        <div className="project-page__footer">
            <a href="https://uk.linkedin.com/in/jbergs">
                <img className="footer__logo" src={iconLinkedIn} alt="LinkedIn logo" />
            </a>
            Jessica Bergs {new Date().getFullYear()} All rights reserved.
        </div>
    </div>
);

export default ProjectPage;
