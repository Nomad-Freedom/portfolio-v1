import React from "react";
import { Button, Heading, Intro, SubHeading, Text } from "../ui";
import { css, useTheme } from "@emotion/react";

const AboutMe = () => {
  const theme = useTheme();
  const spanBase = css`
    font-weight: ${theme.fontWeights.body};
    margin-left: ${theme.space[1]}rem;
    font-size: ${theme.fontSizes.normal}rem;
  `;
  return (
    <article
      css={css`
        margin-bottom: ${theme.space[6]}rem;
        ${theme.mq()[2]} {
          max-width: 50%;
          margin-bottom: 0;
        }
      `}
    >
      <Heading mb={4}>About Me</Heading>
      <Intro mb={1}>Who am i?</Intro>
      <SubHeading mb={2}>
        I&apos;m Benny Hernandez, a FullStack Web Developer
      </SubHeading>
      <Text mb={2}>
        I am a software developer based in the United States with more than 5
        years of experience in the tech industry and 1 year of experience
        developing advanced websites and web applications. What makes me
        passionate about software development is, having the ability to
        transform business requirements into useful software that helps people
        achieve their goals. Take a look at my portfolio work and lets see if we
        can work together on your next project.
      </Text>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border-top: solid rgba(0, 0, 0, 0.5) 1px;
          padding-top: ${theme.space[3]}rem;
        `}
      >
        <Text mb={2} weight="bold">
          Name: <span css={spanBase}>Benny Hernandez</span>
        </Text>
        <div
          css={css`
            justify-self: center;
          `}
        >
          <Text mb={2} weight="bold">
            From: <span css={spanBase}>Miami, Fl</span>
          </Text>
        </div>
        <div
          css={css`
            grid-column: 1 / -1;
          `}
        >
          <Text mb={2} weight="bold">
            Email:{" "}
            <a
              href="mailto:inquiry@bennyhernandez.com"
              css={css`
                ${spanBase}
                color: ${theme.colors.primary};
                font-weight: ${theme.fontWeights.bold};
              `}
            >
              inquiry@bennyhernandez.com
            </a>
          </Text>
        </div>
      </div>
      <div>
        <Button href="/resume.pdf">Download Resume</Button>
        <Button variant="outline" href="/#projects" ml={2}>
          My Work
        </Button>
      </div>
    </article>
  );
};

export default AboutMe;
