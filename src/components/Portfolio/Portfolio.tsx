import * as React from 'react';
import {
    Tooltip
} from 'reactstrap';

interface PortfolioProps {
    toggle: (name: string) => void;
}
interface PortfolioState {
    isOpen: any;
}

class Portfolio extends React.Component<PortfolioProps, PortfolioState> {
    constructor(props: any) {
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
                <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                    <div className="my-auto">
                        <h1 className="mb-0">Pho
                    <span className="text-primary">Huynh</span>
                        </h1>
                        <div className="subheading mb-5">{`Ha Noi, Viet Nam  `}
                            <a href="mailto:shortgiraffe4@gmail.com">shortgiraffe4@gmail.com</a>
                        </div>
                        <p className="mb-5">Javascript developer</p>
                        <ul className="list-inline list-social-icons mb-0">
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
                </section>
                <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
                    <div className="my-auto">
                        <h2 className="mb-5">Skills</h2>

                        <div className="subheading mb-3">Programming Languages</div>
                        <ul className="list-inline list-icons">
                            <li className="list-inline-item" title="javascript">
                                <i className="devicon-javascript-plain"></i>
                                <Tooltip placement="right" isOpen={this.state.isOpen["javascript"]} target="TooltipExample" toggle={() => this.props.toggle("javascript")}>
                                    Javascript
                            </Tooltip>
                            </li>
                            <li className="list-inline-item" title="typescript">
                                <i className="devicon-typescript-plain"></i>
                            </li>
                            <li className="list-inline-item" title="c#">
                                <i className="devicon-csharp-plain"></i>
                            </li>
                        </ul>

                        <div className="subheading mb-3">Platforms and Frameworks</div>
                        <ul className="list-inline list-icons">
                            <li className="list-inline-item" title="nodejs">
                                <i className="devicon-nodejs-plain"></i>
                            </li>
                            <li className="list-inline-item" title="express">
                                <i className="devicon-express-original-wordmark"></i>
                            </li>
                            <li className="list-inline-item" title="reactjs">
                                <i className="devicon-react-plain"></i>
                            </li>
                            <li className="list-inline-item" title="angularjs">
                                <i className="devicon-angularjs-plain"></i>
                            </li>
                            <li className="list-inline-item" title="bootstrap">
                                <i className="devicon-bootstrap-plain"></i>
                            </li>
                        </ul>

                        <div className="subheading mb-3">Tools</div>
                        <ul className="list-inline list-icons">
                            <li className="list-inline-item" title="webpack">
                                <i className="devicon-webpack-plain"></i>
                            </li>
                            <li className="list-inline-item" title="git">
                                <i className="devicon-git-plain"></i>
                            </li>
                            <li className="list-inline-item" title="babel">
                                <i className="devicon-babel-plain"></i>
                            </li>
                            <li className="list-inline-item" title="photoshop">
                                <i className="devicon-photoshop-plain"></i>
                            </li>
                        </ul>

                        <div className="subheading mb-3">Others</div>
                        <ul className="list-inline list-icons">
                            <li className="list-inline-item" title="html5">
                                <i className="devicon-html5-plain"></i>
                            </li>
                            <li className="list-inline-item" title="css3">
                                <i className="devicon-css3-plain"></i>
                            </li>
                            <li className="list-inline-item" title="sass">
                                <i className="devicon-sass-plain"></i>
                            </li>
                            <li className="list-inline-item" title="mongodb">
                                <i className="devicon-mongodb-plain"></i>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
                    <div className="my-auto">
                        <h2 className="mb-5">Experience</h2>

                        <div className="resume-item d-flex flex-column flex-md-row mb-5">
                            <div className="resume-content mr-auto">
                                <h3 className="mb-0 text-primary">Senior Frontend Developer</h3>
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
                                <p>Worked with a small team where I had to be a so-called "Fullstack developer".</p>
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
                                <p>A funny place and fresh start onto ReactJS.</p>
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
                                <p>Was overrated and took an overwhelming postion and worked my-ass-off to finish the job. Learned the most here.</p>
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
                                <p>I both worked for FPT Software Da Nang and Ho Chi Minh Branch. I found my fundamentals here.</p>
                            </div>
                            <div className="resume-date text-md-right">
                                <span className="text-primary">2013 - 2015</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
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
                </section>
                <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
                    <div className="my-auto">
                        <h2 className="mb-5">Interests</h2>
                        <p>Mostly gaming and novel.</p>
                    </div>
                </section>
            </div>
        );
    }
};

export default Portfolio;