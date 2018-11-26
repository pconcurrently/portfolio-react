import * as React from 'react';
import { connect } from 'react-redux';
import {
    Tooltip
} from 'reactstrap';
import TooltipBadge from './TooltipBadge';
import ArtistsList from './MusicSection';

interface PortfolioState {
    isOpen: any;
}

interface PortfolioProps {
    dispatch: any;
}

class Portfolio extends React.Component<PortfolioProps, PortfolioState> {
    constructor(props: PortfolioProps) {
        super(props);
        this.state = {
            isOpen: {}
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle(name: string) {
        this.setState({
            isOpen: {
                [name]: !this.state.isOpen[name]
            }
        })
    }

    render() {
        return (
            <div className="container-fluid p-0">
                <section className="resume-section p-3 p-lg-5" id="about">
                    <div className="my-auto">
                        <h1 className="mb-0">Pho
                            <span className="text-primary">Huynh</span>
                        </h1>
                        <div className="subheading mb-2">{`Ha Noi, Viet Nam  `}
                            <a href="mailto:shortgiraffe4@gmail.com">shortgiraffe4@gmail.com</a>
                        </div>
                        <h5 className="mb-2">Javascript Developer</h5>
                        <ul className="list-inline list-social-icons mb-4">
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/ShortGiraffe">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://twitter.com/shortgiraffe4">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/in/pho-huynh-tan-30a6a510a/">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://github.com/shortgiraffe4">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ArtistsList />
                </section>
                <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
                    <div className="my-auto">
                        <h2 className="mb-5">Skills</h2>

                        <div className="subheading mb-3">Programming Languages</div>
                        <ul className="list-inline list-icons">
                            <li className="list-inline-item">
                                <TooltipBadge icon="devicon-javascript-plain" id="js" tooltip="Javascript" />
                            </li>
                            <li className="list-inline-item" >
                                <TooltipBadge icon="devicon-typescript-plain" id="ts" tooltip="Typescript" />
                            </li>
                            <li className="list-inline-item">
                                <TooltipBadge icon="devicon-csharp-plain" id="csharp" tooltip="C#" />
                            </li>
                        </ul>

                        <div className="subheading mb-3">Platforms and Frameworks</div>
                        <ul className="list-inline list-icons">
                            <li className="list-inline-item">
                                <TooltipBadge icon="devicon-nodejs-plain" id="nodejs" tooltip="NodeJs" />
                            </li>
                            <li className="list-inline-item">
                                <TooltipBadge icon="devicon-express-original-wordmark" id="express" tooltip="ExpressJs" />
                            </li>
                            <li className="list-inline-item">
                                <TooltipBadge icon="devicon-react-plain" id="reactjs" tooltip="ReactJs" />
                            </li>
                            <li className="list-inline-item">
                                <TooltipBadge icon="devicon-angularjs-plain" id="angularjs" tooltip="AngularJs" />
                            </li>
                            <li className="list-inline-item">
                                <TooltipBadge icon="devicon-bootstrap-plain" id="bootstrap" tooltip="Bootstrap" />
                            </li>
                        </ul>

                        <div className="subheading mb-3">Tools</div>
                        <ul className="list-inline list-icons">
                            <li className="list-inline-item">
                                <TooltipBadge icon="devicon-webpack-plain" id="webpack" tooltip="Webpack" />
                            </li>
                            <li className="list-inline-item">
                                <TooltipBadge icon="devicon-git-plain" id="git" tooltip="Git" />
                            </li>
                            <li className="list-inline-item">
                                <TooltipBadge icon="devicon-babel-plain" id="babel" tooltip="Babel" />
                            </li>
                            <li className="list-inline-item">
                                <TooltipBadge icon="devicon-photoshop-plain" id="photoshop" tooltip="Photoshop" />
                            </li>
                        </ul>

                        <div className="subheading mb-3">Others</div>
                        <ul className="list-inline list-icons">
                            <li className="list-inline-item">
                                <TooltipBadge icon="devicon-html5-plain" id="html5" tooltip="HTML5" />
                            </li>
                            <li className="list-inline-item">
                                <TooltipBadge icon="devicon-css3-plain" id="css3" tooltip="CSS3" />
                            </li>
                            <li className="list-inline-item">
                                <TooltipBadge icon="devicon-sass-plain" id="sass" tooltip="Sass" />
                            </li>
                            <li className="list-inline-item">
                                <TooltipBadge icon="devicon-mongodb-plain" id="mongodb" tooltip="MongoDB" />
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
                    <div className="my-auto">
                        <h2 className="mb-5">Experience</h2>

                        <div className="resume-item d-flex flex-column flex-md-row mb-5">
                            <div className="resume-content mr-auto">
                                <h3 className="mb-0 text-primary">Frontend Team Lead</h3>
                                <div className="subheading mb-3 mt-3 text-info">
                                    <img className="company-img mr-3" src="assets/images/goquo.png" />
                                    GoQuo Malaysia
                            </div>
                                <p>Tempted to go abroad to work for a while.</p>
                            </div>
                            <div className="resume-date text-md-right">
                                <span className="text-primary">May 2018 - Present</span>
                            </div>
                        </div>

                        <div className="resume-item d-flex flex-column flex-md-row mb-5">
                            <div className="resume-content mr-auto">
                                <h3 className="mb-0 text-primary">Senior Frontend Developer</h3>
                                <div className="subheading mb-3 mt-3 text-info">
                                    <img className="company-img mr-3" src="assets/images/leflair.png" />
                                    Leflair Vietnam
                            </div>
                                <p>Worked with a small team where I was a so-called "Full-stack developer".</p>
                            </div>
                            <div className="resume-date text-md-right">
                                <span className="text-primary">July 2017 - March 2018</span>
                            </div>
                        </div>

                        <div className="resume-item d-flex flex-column flex-md-row mb-5">
                            <div className="resume-content mr-auto">
                                <h3 className="mb-0 text-primary">Frontend Developer</h3>
                                <div className="subheading mb-3 mt-3 text-info">
                                    <img className="company-img mr-3" src="assets/images/quoine.png" />
                                    Quoine
                            </div>
                                <p>A fresh start on ReactJs.</p>
                            </div>
                            <div className="resume-date text-md-right">
                                <span className="text-primary">January 2017 - June 2017</span>
                            </div>
                        </div>

                        <div className="resume-item d-flex flex-column flex-md-row mb-5">
                            <div className="resume-content mr-auto">
                                <h3 className="mb-0 text-primary">Senior Frontend Developer</h3>
                                <div className="subheading mb-3 mt-3 text-info">
                                    <img className="company-img mr-3" src="assets/images/vastbit.png" />
                                    Vastbit
                            </div>
                                <p>Had opportunity to work directly with foreign customers. A big step to be able to take on frontend side, confidently.</p>
                            </div>
                            <div className="resume-date text-md-right">
                                <span className="text-primary">2016</span>
                            </div>
                        </div>

                        <div className="resume-item d-flex flex-column flex-md-row mb-5">
                            <div className="resume-content mr-auto">
                                <h3 className="mb-0 text-primary">Software Engineer</h3>
                                <div className="subheading mb-3 mt-3 text-info">
                                    <img className="company-img mr-3" src="assets/images/fsoft.png" />
                                    FPT Software
                            </div>
                                <p>Not really had a chance to decide which platform/technology to work with besides C# (Asp.Net) but I'm glad to be able to attain coding fundamentals.</p>
                            </div>
                            <div className="resume-date text-md-right">
                                <span className="text-primary">2013 - 2015</span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
                    <div className="my-auto">
                        <h2 className="mb-5">Education</h2>

                        <div className="resume-item d-flex flex-column flex-md-row mb-5">
                            <div className="resume-content mr-auto">
                                <h3 className="mb-0 text-primary">FPT University</h3>
                                <div className="subheading mb-3">Bachelor of Engineer</div>
                                <div>Software Engineering</div>
                            </div>
                            <div className="resume-date text-md-right">
                                <span className="text-primary">October 2010 - May 2015</span>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
                    <div className="my-auto">
                        <h2 className="mb-5">Interests</h2>
                        <p>Mostly gaming and novel</p>
                    </div>
                </section> */}
            </div>
        );
    }
};

export default connect(null)(Portfolio);