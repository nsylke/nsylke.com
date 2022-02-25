import React from 'react';
import Header from '@components/organisms/header';

const Page = () => (
    <React.Fragment>
        <div className="container">
            <Header />
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
        `}</style>
    </React.Fragment>
);

export default Page;
