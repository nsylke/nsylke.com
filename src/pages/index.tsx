import React from 'react';

const IndexPage = () => (
  <div className="container mx-auto mt-10 p-10">
    <h1 className="text-6xl font-semibold text-gray-900">
      Hi, I'm Nicholas Sylke
    </h1>
    <p className="mt-6 mb-12 text-xl font-normal text-gray-600">
      I'm a software engineer with a passion for building secure products with
      compelling designs.
    </p>
    <h2 className="mt-8 mb-3 text-2xl font-semibold text-gray-900">Blog</h2>
    <p className="mb-5 text-gray-600">No articles yet, check back soon!</p>
    <h2 className="mt-8 mb-3 text-2xl font-semibold text-gray-900">
      Work Experience
    </h2>
    <table className="w-full">
      <tbody>
        <tr className="border-b border-gray-200">
          <td className="py-4">
            <div className="flex flex-col">
              <p className="text-sm text-gray-900">Member (Founder)</p>
              <p className="text-sm text-gray-600">Trpkit LLC</p>
            </div>
          </td>
          <td className="py-4 hidden lg:table-cell">
            <p className="text-gray-900">
              Making collaboration and communication easy, private, and secure.
            </p>
          </td>
          <td className="py-4">
            <p className="text-gray-900">Jan 2020 - Now</p>
          </td>
        </tr>
        <tr>
          <td className="py-4">
            <div className="flex flex-col">
              <p className="text-sm text-gray-900">Software Engineer</p>
              <p className="text-sm text-gray-600">Ken Cook Co.</p>
            </div>
          </td>
          <td className="py-4 hidden lg:table-cell">
            <p className="text-gray-900">
              Building e-learning and e-commerce platform
            </p>
          </td>
          <td className="py-4">
            <p className="text-gray-900">Dec 2019 - Now</p>
          </td>
        </tr>
      </tbody>
    </table>
    <div className="flex justify-center gap-2 mt-8 mb-5 text-gray-600">
      <a
        target="_blank"
        href="https://github.com/nsylke"
        className="hover:text-gray-800"
      >
        GitHub
      </a>
      <span className="mx-2">&bull;</span>
      <a
        target="_blank"
        href="https://linkedin.com/in/nsylke"
        className="hover:text-gray-800"
      >
        LinkedIn
      </a>
      <span className="mx-2">&bull;</span>
      <a
        target="_blank"
        href="https://twitter.com/nsylke"
        className="hover:text-gray-800"
      >
        Twitter
      </a>
    </div>
  </div>
);

export default IndexPage;
