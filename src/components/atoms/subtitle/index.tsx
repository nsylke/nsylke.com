import React from 'react';

interface Props {
    text: string;
}

const Subtitle: React.FC<Props> = ({ text }) => (
    <React.Fragment>
        <h2>{text}</h2>
        {/* language=CSS */}
        <style jsx>{`
            h2 {
                margin: 30px 0 40px;
                font-size: 20px;
                color: #818588;
                letter-spacing: -0.15px;
                line-height: 1.5;
                font-weight: 400;
            }
        `}</style>
    </React.Fragment>
);

export default Subtitle;
