import React from 'react';

const Content: React.FunctionComponent = () => (
    <React.Fragment>
        <main>
            <div className="content">
                <h2>Nicholas Sylke</h2>
                <h1>Software Engineer</h1>
                <div className="description">
                    <p>Hi! I am a software engineer with 4 years of software development experience and 8 years of web development experience. I have worked as a freelance software engineer, web developer and system administrator for the past 4 years.</p>
                    <p>I have implemented sites from the ground up and improved/upgraded legacy systems to current ones. I have worked with platforms and frameworks like WordPress and Shopify.</p>
                    <p>I use the following programming languages: Java, PHP, Node.js, JavaScript, Ruby, and C++. I also adhere to best practices in the software industry including, but not limited to, version control, backups, and documented code.</p>
                    <p>
                        <a href="https://facebook.com/nsylke"><i className="fab fa-facebook-f"/></a>
                        <a href="https://twitter.com/nsylke"><i className="fab fa-twitter"/></a>
                        <a href="https://linkedin.com/in/nsylke"><i className="fab fa-linkedin-in"/></a>
                        <a href="https://dribbble.com/nsylke"><i className="fab fa-dribbble"/></a>
                        <a href="https://github.com/nsylke"><i className="fab fa-github"/></a>
                        <a href="mailto:nicksylke@outlook.com"><i className="fas fa-envelope"/></a>
                    </p>
                </div>
            </div>
        </main>
        {/* language=CSS */}
        <style jsx>{`
            main {
                margin-right: auto;
                margin-left: auto;
                padding-left: 15px;
                padding-right: 15px;
            }

            main:before, main:after {
                content: ' ';
                display: table;
            }

            main:after {
                clear: both;
            }

            .content {
                font-size: 1.2em;
                font-family: 'Open Sans', sans-serif;
                font-weight: 500;
                padding: 100px 0 55px;
                position: relative;
            }

            .content h2 {
                font-size: 32px;
                font-weight: 500;
                margin: 0;
            }

            .content h2:after {
                background: #93A1B0;
                width: 85px;
                height: 5px;
                content: '';
                display: block;
                margin: 27px 0;
            }

            .content h1 {
                font-size: 38px;
                margin: 0 0 30px;
            }

            .description {
                font-size: 15px;
                line-height: 1.8;
            }

            .description p:last-of-type {
                margin-bottom: 0;
            }

            .description .fab, .description .fas {
                font-size: 20px;
                display: inline-block;
                margin: 0 10px;
            }

            .description p .fab:first-child, .description p .fas:first-child {
                margin-left: 0;
            }

            .description a {
                color: #FFFFFF;
            }

            .description a:hover {
                color: #93A1B0;
            }

            @media (min-width: 600px) {
                main {
                    width: 590px;
                }
            }

            @media (min-width: 768px) {
                main {
                    width: 740px;
                }

                .content h2 {
                    font-size: 38px;
                }

                .content h1 {
                    font-size: 52px;
                    margin: 0 0 40px;
                }

                .description {
                    font-size: 17px;
                }

                .content {
                    padding: 145px 0;
                }
            }

            @media (min-width: 992px) {
                main {
                    width: 910px;
                }

                .content {
                    padding: 145px 280px 145px 0;
                }
            }

            @media (min-width: 1200px) {
                main {
                    width: 1170px;
                }
            }
        `}</style>
    </React.Fragment>
)

export default Content;
