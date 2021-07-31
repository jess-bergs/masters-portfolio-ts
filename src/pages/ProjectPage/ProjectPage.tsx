import React from 'react';
import { useYScrollingPosition } from './hooks';
import ProjectHeader, { ProjectHeaderProps } from '../../components/ProjectHeader/ProjectHeader';
import ProjectSpecs, { ProjectSpecsProps } from '../../components/ProjectSpecs/ProjectSpecs';
import Headline from '../../components/Headline/Headline';
import iconLinkedIn from '../../assets/images/icons/icon_linkedin_neg.svg';
import './_ProjectPage.scss';

export interface ProjectPageProps {
    navigationLinks?: NavigationProps;
    projectContents: ProjectContentsProps;
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
    const Y_SCROLL_THRESHOLD = 300;
    const curYOffset = useYScrollingPosition();
    const useStickyNav = curYOffset > Y_SCROLL_THRESHOLD;

    return (
        <div className={`navigation__container${useStickyNav ? '--sticky' : ''} `}>
            <span className="navigation__left">
                &lsaquo; &nbsp;
                <a href={navigationLinks.left.url}>{navigationLinks.left.name}</a>
            </span>
            <span className="navigation__right">
                <a href={navigationLinks.right.url}>{navigationLinks.right.name}</a>
                &nbsp; &rsaquo;
            </span>
        </div>
    );
};

const Logo = () => (
    <div className="logo__container">
        <a href="/" className="logo__link" style={{ top: useYScrollingPosition() }}>
            <div className="logo__title">
                <Headline text="Jessica Bergs" level={3} />
                <Headline text="Master's portfolio" level={5} />
            </div>
        </a>
    </div>
);

const Footer = () => (
    <div className="footer__container">
        &#169; {new Date().getFullYear()} Jessica Bergs {'   '}
        <a href="https://uk.linkedin.com/in/jbergs">
            <img className="footer__icon" src={iconLinkedIn} alt="LinkedIn logo" />
        </a>
        . All rights reserved.
    </div>
);

interface ProjectContentsProps {
    contents: JSX.Element[];
}

const ProjectContents = ({ contents }: ProjectContentsProps) => (
    <div className="project-contents__container">
        {contents.map((content) => (
            <div className="project-contents__content"> {content} </div>
        ))}
    </div>
);

const ProjectPage = ({
    heroImageSrc,
    navigationLinks,
    headerContents,
    projectContents,
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
                <ProjectContents {...projectContents} />
                <ProjectSpecs {...specsContents} />
            </div>
            <Footer />
        </section>
    </div>
);

export default ProjectPage;
