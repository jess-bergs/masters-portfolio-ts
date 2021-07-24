import React from 'react';
import iconLinkedIn from '../../assets/images/icons/icon_linkedin_neg.svg';
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
        <div className="project-page__content">{contentText}</div>
        <div className="project-page__footer">
            <a href="https://uk.linkedin.com/in/jbergs">
                <img className="footer__logo" src={iconLinkedIn} alt="LinkedIn logo" />
            </a>
            Jessica Bergs {new Date().getFullYear()} All rights reserved.
        </div>
    </div>
);

export default ProjectPage;
