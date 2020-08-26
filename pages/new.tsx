import React from 'react';

const Page = () => (
    <React.Fragment>
        <div className="container">
            <header>
                <h1>Nicholas Sylke</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos minima sapiente, molestias magni tempora adipisci molestiae. Voluptates quam tempora consectetur vitae obcaecati cumque, veritatis laboriosam voluptas cupiditate nulla fugit!</h2>
                <div>
                    <a href="#" className="linkedin"><i className="fab fa-linkedin-in" /> View my resume on LinkedIn</a>
                    <a href="#" className="twitter"><i className="fab fa-twitter" /> Send me a DM on Twitter</a>
                    <a href="#" className="dribbble"><i className="fab fa-dribbble" /> Check out my work on Dribbble</a>
                </div>
            </header>
        </div>
        {/* language=CSS */}
        <style jsx global>{`
            body {
                font-family: 'Inter', sans-serif;
                font-size: 10px;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            .container {
                max-width: 1440px;
                padding: 0 100px;
                margin: 0 auto;
            }

            header {
                padding-top: 130px;
            }

            h1, h2 {
                margin: 0;
            }

            h1 {
                font-size: 60px;
                color: #171D29;
                letter-spacing: -0.93px;
                font-weight: 600;
            }

            h2 {
                font-size: 20px;
                color: #818588;
                letter-spacing: -0.15px;
                font-weight: 400;
                margin-top: 30px;
                margin-bottom: 40px;
            }

            header div {
                display: grid;
                grid-template-columns: 1fr;
                grid-column-gap: 1em;
                grid-row-gap: 1em;
            }

            @media screen and (min-width: 1150px) {
                header div {
                    grid-template-columns: 1fr 1fr 1fr;
                }
            }

            header div a {
                padding: 20px;
                background-color: #f0f0f0;
                border-radius: 10px;
                font-size: 16px;
                text-decoration: none;
                color: #171D29;
                transition: background-color 180ms ease-out 0s;
            }

            header div a > i {
                padding-right: 8px;
            }

            .dribbble {
                color: #EA4C89;
                background-color: rgba(234, 76, 137, 0.07);
            }

            .dribbble:hover {
                background-color: rgba(234, 76, 137, 0.115);
            }

            .twitter {
                color: #1DA1F2;
                background-color: rgba(29, 161, 242, 0.07);
            }

            .twitter:hover {
                background-color: rgba(29, 161, 242, 0.115);
            }

            .linkedin {
                color: #2867B2;
                background-color: rgba(40, 103, 178, 0.07);
            }

            .linkedin:hover {
                background-color: rgba(40, 103, 178, 0.115);
            }
        `}</style>
    </React.Fragment>
)

export default Page;
