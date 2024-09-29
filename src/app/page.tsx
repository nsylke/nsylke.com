import React from "react";

export default function Page() {
  return (
    <div className="container mx-auto mt-10 p-10">
      <h1 className="text-6xl font-semibold text-gray-900">Hi, I'm Nicholas Sylke</h1>
      <p className="mt-6 mb-12 text-xl font-normal text-gray-600">
        I'm a software engineer with a passion for building compelling designs and secure products
        using{" "}
        <a
          href="https://en.wikipedia.org/wiki/Zero-knowledge_proof"
          className="underline decoration-dotted decoration-blue-500"
        >
          zero knowledge proofs
        </a>{" "}
        and{" "}
        <a
          href="https://en.wikipedia.org/wiki/End-to-end_encryption"
          className="underline decoration-dotted decoration-blue-500"
        >
          end-to-end encryption
        </a>
        .
      </p>
      <h2 className="mt-8 mb-3 text-2xl font-semibold text-gray-900">Blog</h2>
      <p className="mb-5 text-gray-600">No articles yet, check back soon!</p>
      <h2 className="mt-8 mb-3 text-2xl font-semibold text-gray-900">Work Experience</h2>
      <table className="w-full">
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-4">
              <div className="flex flex-col">
                <p className="text-md text-gray-900 font-medium">Member (Co-founder)</p>
                <p className="text-sm text-gray-600">Trpkit LLC</p>
              </div>
            </td>
            <td className="py-4 hidden lg:table-cell">
              <p className="text-gray-900">
                An open source end-to-end encrypted web insights platform
              </p>
            </td>
            <td className="py-4">
              <p className="text-gray-900">Jan 2020 - Now</p>
            </td>
          </tr>
          <tr>
            <td className="py-4">
              <div className="flex flex-col">
                <p className="text-md text-gray-900 font-medium">Software Engineer</p>
                <p className="text-sm text-gray-600">Ken Cook Co.</p>
              </div>
            </td>
            <td className="py-4 hidden lg:table-cell">
              <p className="text-gray-900">Building e-learning and e-commerce platform</p>
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
          rel="noreferrer"
        >
          GitHub
        </a>
        <span className="mx-2">&bull;</span>
        <a
          target="_blank"
          href="https://linkedin.com/in/nsylke"
          className="hover:text-gray-800"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <span className="mx-2">&bull;</span>
        <a
          target="_blank"
          href="https://x.com/nsylke"
          className="hover:text-gray-800"
          rel="noreferrer"
        >
          X (formerly Twitter)
        </a>
      </div>
    </div>
  );
}
