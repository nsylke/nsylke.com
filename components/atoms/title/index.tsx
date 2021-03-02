import React from 'react';

interface Props {
    text: string;
}

const Title: React.FC<Props> = ({ text }) => (
    <React.Fragment>
        <h1>{text}</h1>
        {/* language=CSS */}
        <style jsx>{`
            h1 {
                margin: 0;
                font-size: 60px;
                color: #171D29;
                letter-spacing: -0.93px;
                font-weight: 600;
            }
        `}</style>
    </React.Fragment>
);

export default Title;
