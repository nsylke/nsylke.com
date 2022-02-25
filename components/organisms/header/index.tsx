import React from 'react';
import Title from '../../atoms/title';
import Subtitle from '../../atoms/subtitle';
import SocialMediaContainer from '../../molecules/social-media-container';

const Header: React.FC = () => {
    return (
        <React.Fragment>
            <header>
                <Title text="Hi, I'm Nicholas Sylke" />
                <Subtitle text="I'm a software engineer with a passion for building beautiful websites and applications." />
                <SocialMediaContainer />
            </header>
            {/* language=CSS */}
            <style jsx>{`
                header {
                    padding-top: 130px;
                }
            `}</style>
        </React.Fragment>
    );
};

export default Header;
