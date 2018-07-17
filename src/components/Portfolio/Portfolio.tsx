import * as React from 'react';

const Portfolio = () => {
    return(
        <div className="container-fluid p-0">
            <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                <div className="my-auto">
                <h1 className="mb-0">Pho
                    <span className="text-primary">Huynh</span>
                </h1>
                <div className="subheading mb-5">3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
                    <a href="mailto:name@email.com">name@email.com</a>
                </div>
                <p className="mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                <ul className="list-inline list-social-icons mb-0">
                    <li className="list-inline-item">
                    <a href="#">
                        <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <a href="#">
                        <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <a href="#">
                        <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <a href="#">
                        <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    </li>
                </ul>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;