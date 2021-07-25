import React from 'react';
import { useYScrollingPosition } from './hooks';
import ProjectHeader, { ProjectHeaderProps } from '../../components/ProjectHeader/ProjectHeader';
import ProjectSpecs, { ProjectSpecsProps } from '../../components/ProjectSpecs/ProjectSpecs';
import iconLinkedIn from '../../assets/images/icons/icon_linkedin_neg.svg';
import './_ProjectPage.scss';

export interface ProjectPageProps {
    navigationLinks?: NavigationProps;
    textContent: string;
    headerContents: ProjectHeaderProps;
    specsContents: ProjectSpecsProps;
    heroImageSrc: HeroImageSource;
}

interface NavigationLink {
    name: string;
    url: string;
}

interface NavigationProps {
    left: NavigationLink;
    right: NavigationLink;
}

interface HeroProps {
    heroImageSrc: HeroImageSource;
}

type HeroImageSource = string;

const Hero = ({ heroImageSrc }: HeroProps) => (
    <div
        className="hero__image"
        title="hero-image"
        style={{ backgroundImage: `url(${heroImageSrc})` }}
    >
        <Logo />
    </div>
);

const Navigation = (navigationLinks: NavigationProps) => {
    const NAV_Y_OFFSET = 320;
    const curYOffset = useYScrollingPosition();
    const topOffset = curYOffset > NAV_Y_OFFSET && curYOffset - NAV_Y_OFFSET + 10;

    return (
        <span className="navigation__container">
            <span className="navigation__left" style={{ paddingTop: topOffset }}>
                &lsaquo; &nbsp;
                <a href={navigationLinks.left.url}>{navigationLinks.left.name}</a>
            </span>
            <span className="navigation__right" style={{ paddingTop: topOffset }}>
                <a href={navigationLinks.right.url}>{navigationLinks.right.name}</a>
                &nbsp; &rsaquo;
            </span>
        </span>
    );
};

const Logo = () => (
    <a href="/" className="logo__container" style={{ top: useYScrollingPosition() }}>
        <div className="logo__h1"> Jessica Bergs</div>
        <div className="logo__h2">Master's portfolio </div>
    </a>
);

const Footer = () => (
    <div className="footer__container">
        <a href="https://uk.linkedin.com/in/jbergs">
            <img className="footer__logo" src={iconLinkedIn} alt="LinkedIn logo" />
        </a>
        Jessica Bergs {new Date().getFullYear()} All rights reserved.
    </div>
);

const ProjectPage = ({
    heroImageSrc,
    navigationLinks,
    headerContents,
    textContent,
    specsContents,
}: ProjectPageProps) => (
    <div className="project-page__container">
        <section className="project-page__hero">
            <Hero heroImageSrc={heroImageSrc} />
        </section>
        <section className="project-page__project-content">
            <Navigation {...navigationLinks} />
            <div className="project-page__contents">
                <ProjectHeader {...headerContents} />
                <div className="project-page__text-content">{textContent}</div>
                <ProjectSpecs {...specsContents} />
            </div>
            <Footer />
        </section>
    </div>
);

export default ProjectPage;
