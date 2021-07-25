import React from 'react';
import GridLayout from '../../layouts/GridLayout/GridLayout';
import iconEmail from '../../assets/images/icons/icon_email.svg';
import iconSkype from '../../assets/images/icons/icon_skype.svg';
import iconLinkedin from '../../assets/images/icons/icon_linkedin.svg';
import './_Homepage.scss';

const Hero = () => (
    <div className="hero__container">
        <video
            className="hero__video"
            autoPlay
            muted
            loop
            id="hero_video"
            poster="https://www.jbergs.eu/res/images_originalSize/title/video/titlemov_poster.jpg"
        >
            <source src="https://www.jbergs.eu/res/video/title/titlemov.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay">
            <div className="hero__overlay-content centered-layout">
                <div className="hero__title">
                    <div className="title h1"> Jessica Bergs</div>
                    <div className="title h2">Master's portfolio</div>
                    <hr />
                    <div className="title h3">
                        M.Sc. Visualisation: Serious Games Development <br /> The Glasgow School of
                        Art
                    </div>
                </div>
            </div>
        </div>
    </div>
);

interface ProjectPreview {
    title: string;
    subline: string;
    previewImageUrl: string;
}

interface HomepageProps {
    projects: ProjectPreview[];
}

const ProjectPreview = ({ title, subline, previewImageUrl }: ProjectPreview) => (
    <div>
        <img className="project__image" alt="projectImage" src={previewImageUrl} />
        <div className="project__overlay">
            <div className="project__title h3">
                {title}
                <div className="project__subtitle h4">{subline}</div>
            </div>
        </div>
    </div>
);

const Homepage = ({ projects }: HomepageProps) => (
    <div className="homepage__container">
        <section className="homepage__hero ">
            <Hero />
        </section>

        <section className="homepage__projects-section ">
            <div className="projects__container centered-layout">
                <div className="projects__title h2"> key projects</div>
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
                        <div className="keywords__title h3">Keywords</div>
                        <div className="keywords__text">
                            Spatial virtual reality, collaborative games, tangible interfaces, 3D
                            reconstruction, 3D modelling, IoT wearables, health games, mobile
                            development
                        </div>
                    </div>
                    <div className="about__contact">
                        <div className="contact__title h3">Contact</div>
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
                            <a href="skype:jessica_bergs?chat">
                                <img className="contact__icon" src={iconSkype} alt="skype-icon" />
                            </a>
                        </div>
                    </div>
                    <div className="about__copyright">
                        <div className="copyright__text">
                            &#169; {new Date().getFullYear()} Jessica Bergs All rights reserved.
                        </div>
                    </div>
                </GridLayout>
            </div>
        </section>
    </div>
);

export default Homepage;
