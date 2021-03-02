import React from 'react';
import Title from "../../atoms/title";
import Subtitle from "../../atoms/subtitle";
import SocialMediaContainer from "../../molecules/social-media-container";

const Header: React.FC = () => (
    <React.Fragment>
        <header>
            <Title text="Nicholas Sylke"/>
            <Subtitle text="22 year old software engineer working at Ken Cook currently."/>
            <SocialMediaContainer/>
        </header>
        {/* language=CSS */}
        <style jsx>{`
            header {
                padding-top: 130px;
            }
        `}</style>
    </React.Fragment>
)

export default Header;
