import React from 'react';

interface Props {
    type: 'LinkedIn' | 'Twitter' | 'Dribbble';
    url: string;
    text: string;
}

interface ResolvableType {
    className: string;
    icon: string;
}

const SocialLink: React.FC<Props> = ({ type, url, text }) => {
    const resolveType = (type: string): ResolvableType => {
        switch (type) {
            case 'LinkedIn':
                return {
                    className: 'linkedin',
                    icon: 'fab fa-linkedin-in'
                }
            case 'Twitter':
                return {
                    className: 'twitter',
                    icon: 'fab fa-twitter'
                }
            case 'Dribbble':
                return {
                    className: 'dribbble',
                    icon: 'fab fa-dribbble'
                }
            default:
                return {
                    className: '',
                    icon: ''
                }
        }
    }

    const { className, icon } = resolveType(type);

    return (
        <React.Fragment>
            <a href={url} className={className}>
                <i className={icon}/> {text}
            </a>
            {/* language=CSS */}
            <style jsx>{`
                a {
                    padding: 20px;
                    background-color: #f0f0f0;
                    border-radius: 10px;
                    font-size: 16px;
                    text-decoration: none;
                    color: #171D29;
                    transition: background-color 180ms ease-out 0s;
                }

                a > i {
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
};

export default SocialLink;
