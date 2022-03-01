import React from 'react';

const Career: React.FC = () => (
    <React.Fragment>
        <h2 className="mt-12 mb-6 text-4xl font-semibold text-neutral-800">My Career</h2>
        <div
            className="mb-12 w-full h-96 bg-[url('/img/career-kencook.png')] bg-cover bg-top rounded-md relative cursor-pointer"
            onClick={() => window.open('https://kencook.com', '_blank')}
        >
            <div className="bg-neutral-700/80 py-2 px-4 absolute bottom-0 w-full">
                <h3 className="text-xl font-semibold text-neutral-50">Ken Cook Co.</h3>
                <p className="text-lg text-neutral-50">Software Engineer &mdash; 2019-Present</p>
            </div>
        </div>
        <div
            className="w-full h-96 bg-[url('/img/career-typicalbot.png')] bg-cover bg-top rounded-md relative cursor-pointer"
            onClick={() => window.open('https://typicalbot.com', '_blank')}
        >
            <div className="bg-neutral-700/80 py-2 px-4 absolute bottom-0 w-full">
                <h3 className="text-xl font-semibold text-neutral-50">TypicalBot LLC</h3>
                <p className="text-lg text-neutral-50">Member &mdash; 2020-Present</p>
            </div>
        </div>
    </React.Fragment>
);

export default Career;
