import React from 'react';
import Title from "../../atoms/title";
import Subtitle from "../../atoms/subtitle";
import SocialMediaContainer from "../../molecules/social-media-container";

const Header: React.FC = () => {
    const getAge = (time: string) => {
        return Math.floor((new Date().getTime() - new Date(time).getTime()) / 3.15576e+10);
    }

    return (
        <React.Fragment>
            <header>
                <Title text="Nicholas Sylke"/>
                <Subtitle text={`${getAge(process.env.BIRTHDAY!)} year old software engineer.`}/>
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
}

export default Header;
