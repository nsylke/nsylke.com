import { Heading } from "@/components/Heading";
import { Strong } from "@/components/Strong";
import { Subheading } from "@/components/Subheading";
import { Text } from "@/components/Text";
import { TextLink } from "@/components/TextLink";
import React from "react";

export default function Page() {
  return (
    <div className="container mx-auto mt-20 px-6 lg:px-0 space-y-8">
      <div className="space-y-2">
        <Heading>Hi, I'm Nicholas Sylke</Heading>
        <Text>
          I'm a software engineer with a passion for building compelling designs and secure products
          using{" "}
          <TextLink
            target="_blank"
            href="https://en.wikipedia.org/wiki/Zero-knowledge_proof"
            rel="noreferrer"
          >
            zero knowledge proofs
          </TextLink>{" "}
          and{" "}
          <TextLink
            target="_blank"
            href="https://en.wikipedia.org/wiki/End-to-end_encryption"
            rel="noreferrer"
          >
            end-to-end encryption
          </TextLink>
          .
        </Text>
      </div>
      <div className="space-y-2">
        <Subheading>Blog</Subheading>
        <Text>No articles yet, check back soon!</Text>
      </div>
      <div className="space-y-2">
        <Subheading>Work Experience</Subheading>
        <table className="w-full">
          <tbody>
            <tr className="border-b border-zinc-950/10 dark:border-white/10">
              <td className="pb-4">
                <div className="flex flex-col">
                  <Strong>Member (Co-founder)</Strong>
                  <Text>Trpkit LLC</Text>
                </div>
              </td>
              <td className="pb-4 hidden lg:table-cell">
                <Text>
                  An open-source, zero-knowledge, post-quantum, end-to-end encrypted web insights
                  platform
                </Text>
              </td>
              <td className="pb-4">
                <Text>Jan 2022 - Now</Text>
              </td>
            </tr>
            <tr>
              <td className="py-4">
                <div className="flex flex-col">
                  <Strong>Software Engineer</Strong>
                  <Text>Ken Cook Co.</Text>
                </div>
              </td>
              <td className="py-4 hidden lg:table-cell">
                <Text>Building e-learning and e-commerce platform</Text>
              </td>
              <td className="py-4">
                <Text>Dec 2019 - Now</Text>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center gap-2 mt-8 mb-5 text-gray-600">
        <TextLink target="_blank" href="https://github.com/nsylke" rel="noreferrer">
          GitHub
        </TextLink>
        <span className="mx-2">&bull;</span>
        <TextLink target="_blank" href="https://linkedin.com/in/nsylke" rel="noreferrer">
          LinkedIn
        </TextLink>
        <span className="mx-2">&bull;</span>
        <TextLink target="_blank" href="https://x.com/nsylke" rel="noreferrer">
          X (formerly Twitter)
        </TextLink>
      </div>
    </div>
  );
}
