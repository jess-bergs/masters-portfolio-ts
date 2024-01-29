import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Headline from '../../components/Headline/Headline';
import GridLayout from '../../layouts/GridLayout/GridLayout';
import iconEmail from '../../assets/images/icons/icon_email.svg';
import iconSkype from '../../assets/images/icons/icon_skype.svg';
import iconLinkedin from '../../assets/images/icons/icon_linkedin.svg';
import iconGH from '../../assets/images/icons/github.svg';
import './_Homepage.scss';

const Hero = () => (
    <div className="hero__container">
        <video
            className="hero__video"
            autoPlay
            muted
            loop
            id="hero_video"
            poster="https://d39hr3ghz5orka.cloudfront.net/images/title/video/titlemov_poster.jpg"
        >
            <source
                src="https://d39hr3ghz5orka.cloudfront.net/video/title/titlemov.mp4"
                type="video/mp4"
            />
        </video>
        <div className="hero__overlay">
            <div className="hero__overlay-content centered-layout">
                <div className="hero__title">
                    <Headline text="Jess Bergs" level={1} />
                    <Headline text="Master's portfolio" level={2} />
                    <hr />
                    <Headline text="M.Sc. Visualisation: Serious Games Development " level={4} />
                    <Headline text="The Glasgow School of Art" level={4} />
                </div>
            </div>
        </div>
    </div>
);

interface ProjectPreview {
    title: string;
    subline: string;
    previewImageUrl: string;
    pagePath: string;
}

interface HomepageProps {
    projects: ProjectPreview[];
}

const ProjectPreview = ({ title, subline, previewImageUrl, pagePath }: ProjectPreview) => (
    <Link to={pagePath}>
        <div className="project__container">
            <img className="project__image" alt="projectImage" src={previewImageUrl} />
            <div className="project__overlay">
                <div className="project__title">
                    <Headline text={title} level={3} />
                    <div className="project__subtitle">
                        <Headline text={subline} level={4} />
                    </div>
                </div>
            </div>
        </div>
    </Link>
);

const MediaPreloader = () => (
    <Helmet>
        <link
            rel="preload"
            as="image"
            href="https://d39hr3ghz5orka.cloudfront.net/images/title/video/titlemov_poster.jpg"
        />
    </Helmet>
);

const Homepage = ({ projects }: HomepageProps) => (
    <div className="homepage__container">
        <MediaPreloader />
        <section className="homepage__hero-section ">
            <Hero />
        </section>

        <section className="homepage__projects-section ">
            <div className="projects__container centered-layout">
                <div className="projects__title">
                    <Headline text="key projects" level={2} />
                </div>
                <GridLayout>
                    {projects.map((project) => (
                        <ProjectPreview {...project} />
                    ))}
                </GridLayout>
            </div>
        </section>

        <section className="homepage__about-section">
            <div className="about__container centered-layout">
                <GridLayout>
                    <div className="about__keywords">
                        <div className="keywords__title">
                            <Headline text="keywords" level={3} />
                        </div>
                        <div className="keywords__text">
                            Spatial virtual reality, collaborative games, tangible interfaces, 3D
                            reconstruction, 3D modelling, IoT wearables, health games, mobile
                            development
                        </div>
                    </div>
                    <div className="about__contact">
                        <div className="contact__title">
                            <Headline text="Contact" level={3} />
                        </div>
                        <div className="contact__icons">
                            <a href="mailto:info(at)jbergs.eu">
                                <img className="contact__icon" src={iconEmail} alt="email-icon" />
                            </a>
                            <a href="http://www.linkedin.com/in/jbergs">
                                <img
                                    className="contact__icon"
                                    src={iconLinkedin}
                                    alt="linkedin-icon"
                                />
                            </a>
                            <a href="https://github.com/j-bergs">
                                <img className="contact__icon" src={iconGH} alt="gh-icon" />
                            </a>
                        </div>
                    </div>
                    <div className="about__copyright">
                        <div className="copyright__text">
                            &#169; {new Date().getFullYear()} Jessica Bergs <br /> All rights
                            reserved.
                        </div>
                    </div>
                </GridLayout>
            </div>
        </section>
    </div>
);

export default Homepage;
