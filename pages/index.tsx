import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Content from '../components/Content';

const IndexPage: NextPage = () => (
    <React.Fragment>
        <Head>
            <title>Nicholas Sylke — Software Engineer</title>
        </Head>
        <Content />
        {/* language=CSS */}
        <style jsx global>{`
            html {
                height: 100%;
            }

            body {
                height: 100%;
                font-family: 'Inter', sans-serif;
                font-size: 10px;
                color: #FFFFFF;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
        `}</style>
    </React.Fragment>
)

export default IndexPage;
