import React from 'react';
import SocialLink from "../../atoms/social-link";

const SocialMediaContainer: React.FC = () => (
    <React.Fragment>
        <div className="social-media-container">
            <SocialLink type="LinkedIn" url="https://linkedin.com/in/nsylke" text="View my resume on LinkedIn"/>
            <SocialLink type="Twitter" url="https://twitter.com/nsylke" text="Send me a DM on Twitter"/>
            <SocialLink type="Dribbble" url="https://dribbble.com/nsylke" text="Check out my work on Dribbble"/>
        </div>
        {/* language=CSS */}
        <style jsx>{`
            .social-media-container {
                display: grid;
                grid-template-columns: 1fr;
                grid-column-gap: 1em;
                grid-row-gap: 1em;
            }

            @media screen and (min-width: 1150px) {
                .social-media-container {
                    grid-template-columns: 1fr 1fr 1fr;
                }
            }
        `}</style>
    </React.Fragment>
)

export default SocialMediaContainer;
