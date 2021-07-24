import React from 'react';
import ProjectHeader, { ProjectHeaderProps } from '../../components/ProjectHeader/ProjectHeader';
import ProjectSpecs, { ProjectSpecsProps } from '../../components/ProjectSpecs/ProjectSpecs';
import iconLinkedIn from '../../assets/images/icons/icon_linkedin_neg.svg';
import './_ProjectPage.scss';

interface NavigationLink {
    name: string;
    url: string;
}

interface Navigation {
    left: NavigationLink;
    right: NavigationLink;
}

export interface ProjectPageProps {
    heroImageSrc: string;
    navigationLinks?: Navigation;
    textContent: string;
    headerContent: ProjectHeaderProps;
    specsContent: ProjectSpecsProps;
}

const Navigation = (navigationLinks: Navigation) => (
    <span className="nav">
        <span className="nav--left">
            &lsaquo; &nbsp;
            <a href={navigationLinks.left.url}>{navigationLinks.left.name}</a>
        </span>
        <span className="nav--right">
            <a href={navigationLinks.right.url}>{navigationLinks.right.name}</a>
            &nbsp; &rsaquo;
        </span>
    </span>
);

const Logo = () => (
    <a href="/" className="logo__container">
        <div className="logo__h1"> Jessica Bergs</div>
        <div className="logo__h2">Master's portfolio </div>
    </a>
);

const ProjectPage = ({
    heroImageSrc,
    navigationLinks,
    headerContent,
    textContent,
    specsContent,
}: ProjectPageProps) => (
    <div className="project-page__container">
        <div
            className="project-page__hero-image"
            data-testid="hero-image"
            style={{ backgroundImage: `url(${heroImageSrc})` }}
        >
            <Logo />
        </div>
        <div className="project-page__prt">
            <Navigation {...navigationLinks} />
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
    </div>
);

export default ProjectPage;
