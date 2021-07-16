import * as React from "react";
import { NavBar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";
import portrait from "../illustrations/portrait.jpg";
import hypernet from "../illustrations/hypernet.png";
import google from "../illustrations/google.png";
import fourh from "../illustrations/4-H.png";

import "../styles/styles.scss";

import {
  BodyWrapper,
  AboutMeWrapper,
  ImgWrapper,
  TextWrapper,
  ActivityWrapper,
  ActivityDescription,
  ActivityItem,
} from "../styles/aboutStyles";
// markup
const AboutPage = () => {
  return (
    <div id="font">
      <NavBar />
      <BodyWrapper>
        <AboutMeWrapper>
          <TextWrapper>
            <h1>about me</h1>
            <p>
              Hi! I'm Shepard and I'm 18 years old! I am currently a student at
              Baylor University, studying Computer Science and Business. I have
              just over 3 years of coding experience. Learning and using my
              knowledge to make creative and fun projects is what drives me to
              continue developing.
            </p>
          </TextWrapper>
          <ImgWrapper>
            <img alt="Portrait" src={portrait} />
          </ImgWrapper>
        </AboutMeWrapper>

        <ActivityWrapper>
          <h1>activites</h1>
          <ActivityItem>
            <a href="https://4-h.org/about/what-is-4-h/" target="_blank">
              <img alt="4-H" src={fourh} />
            </a>
            <ActivityDescription>
              <h4>4-H</h4>
              <p>
                Throughout my grade school years, I had the priviledge to
                participate in the Youth Development program, 4-H. Through this
                program, I overcame my fear of speaking in front of others, by
                participating heavily in the Public Speaking project. I also had
                the chance to develop other areas in STEM, through a robotics
                project. At the culmniation of my 11 years in 4-H, I
                co-presented an educational presentation bringing awareness to
                missinformation. I won first at State!
              </p>
            </ActivityDescription>
          </ActivityItem>
          <ActivityItem>
            <a
              href="https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute/"
              target="_blank"
            >
              <img alt="google" src={google} />
            </a>
            <ActivityDescription>
              <h4>Google CSSI</h4>
              <p>
                I had the incredible opportunity to spend a month learning from
                Google Engineers at Google's CSSI (Computer Science Summer
                Institute). I learned more about Javascript in a p5 course.
                Being new to Javascript and web development, I was incredibly
                excited and thankful for this opportunity to extend my knowledge
                and build some cool things!
              </p>
            </ActivityDescription>
          </ActivityItem>
          <ActivityItem>
            <a href="https://hypernetlabs.io/about/" target="_blank">
              <img alt="Hypernet" src={hypernet} />
            </a>
            <ActivityDescription>
              <h4>Hypernet Labs Intern</h4>
              <p>
                I spent the Summer of 2021 interning at Hypernet Labs. I am
                incredibly grateful for this experience because I learned so
                much about development life cycles and programming. I worked in
                Typescript (for the front-end) and Python (for the back-end). I
                learned about tests, web sockets, SDks, and APIs.
              </p>
            </ActivityDescription>
          </ActivityItem>
        </ActivityWrapper>
      </BodyWrapper>
      <Footer />
    </div>
  );
};

export default AboutPage;
