import React from 'react';

const Page = () => (
    <div className="container mx-auto pt-[8em]">
        <h1 className="text-6xl font-semibold text-neutral-800">Hi, I'm Nicholas Sylke</h1>
        <h2 className="mt-6 mb-12 text-xl font-normal text-neutral-600">
            I'm a software engineer with a passion for building secure products with compelling designs.
        </h2>
        <div className="grid grid-cols-3 gap-5">
            <a
                className="bg-[#2867b2]/10 hover:bg-[#2867b2]/20 cursor-pointer px-6 py-4 rounded-md text-[#2867b2] transition ease-in-out"
                href="https://linkedin.com/in/nsylke"
                target="_blank"
            >
                View my resume on LinkedIn
            </a>
            <a
                className="bg-[#1da1f2]/10 hover:bg-[#1da1f2]/20 cursor-pointer px-6 py-4 rounded-md text-[#1da1f2] transition ease-in-out"
                href="https://twitter.com/nsylke"
                target="_blank"
            >
                Send me a DM on Twitter
            </a>
            <a
                className="bg-[#171515]/10 hover:bg-[#171515]/20 cursor-pointer px-6 py-4 rounded-md text-[#171515] transition ease-in-out"
                href="https://github.com/nsylke"
                target="_blank"
            >
                Check out my work on GitHub
            </a>
        </div>
    </div>
);

export default Page;
