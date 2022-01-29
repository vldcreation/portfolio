import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Vicktor Desrony</strong> I Have experience as Software Developer. Interested in studying the problems and
            providing solutions with ideas related to Information Technology.Able to work with teams or
            individuals and have good communication skills. Able to learn quickly about new
            things and are interested in learning new technology and other things about technology
          </div>
          <div className="AboutBio tagline2">
          . I am confident in my
            ability to come up with compelling
            ideas for memorable corporate
            impact.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
