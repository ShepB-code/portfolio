import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { NavBar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";
import data from "../illustrations/data.svg";
import computer from "../illustrations/computer.svg";
import "../styles/styles.scss";

import {
  BodyWrapper,
  DescriptionWrapper,
  SpecialityWrapper,
  SkillWrapper,
  ImgSkillWrapper,
  Grid,
  Item,
  Stats,
  Content,
} from "../styles/projectStyles";
// markup
const ProjectPage = () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(
              first: 8
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                  languages(first: 3) {
                    nodes {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <div id="font">
      <NavBar />
      <BodyWrapper>
        <SpecialityWrapper>
          <h1>my specialities</h1>
          <SkillWrapper>
            <ImgSkillWrapper>
              <img alt="data" src={data} />
            </ImgSkillWrapper>
            <DescriptionWrapper>
              <h1>APIs and Data Analysis</h1>
              <p>
                Through much of my time programming, I have focused most of my
                development in APIs and Data Analysis. When I first started out
                in Python, I loved to make Discord bots and link them to some
                sort of API. Examples of this include a Twitch bot that fetched
                stream data and a Youtube Bot that fetched information on videos
                and Youtube channels. Recently, I have done work with
                Hypernetlabs on their API, SDK, and Website. I really enjoyed
                learning about their API over the summer and improving it when
                changes were needed.
              </p>
            </DescriptionWrapper>
          </SkillWrapper>
          <SkillWrapper>
            <ImgSkillWrapper>
              <img alt="computer" src={computer} />
            </ImgSkillWrapper>

            <DescriptionWrapper>
              <h1>Python and Java</h1>
              <p>
                As said previously, I have the most experience in Python. I have
                been able to garner this skill by working for Hypernet Labs and
                doing personal projects. In addition to this, I also have
                experience in Java. I completed a year long AP course in Java,
                and learned many things about algorithms and data structures.
                Before the class ended, I made my own website from vanilla
                javascript and HTML that visualized sorting algorithms. I had a
                lot of fun learning Javascript basics through this project and
                applying my knowledge from my Java course.
              </p>
            </DescriptionWrapper>
          </SkillWrapper>
        </SpecialityWrapper>
        <Grid>
          {edges.map(({ node }) => (
            <Item key={node.id} as="a" href={node.url} target="_blank">
              <Content>
                <h1>{node.name}</h1>
                <p>
                  {node.description != null
                    ? node.description
                    : "No description given"}
                </p>
              </Content>
              <Stats>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  data-view-component="true"
                  height="16"
                  width="16"
                  class="octicon octicon-star mr-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                  ></path>
                </svg>
                <p>{node.stargazers.totalCount}</p>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  data-view-component="true"
                  height="16"
                  width="16"
                  class="octicon octicon-repo-forked"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  ></path>
                </svg>
                <p>{node.forkCount}</p>
              </Stats>
            </Item>
          ))}
        </Grid>
      </BodyWrapper>

      <Footer />
    </div>
  );
};

export default ProjectPage;
