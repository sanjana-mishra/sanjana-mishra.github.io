// About.js
import React from 'react';
import './about.css';
import sanjanaImage from './sanjana-image-alt.jpeg';  // Replace with the actual path to your image
import {FaLinkedin} from 'react-icons/fa';


const About = () => {
  return (
    <div id="about">
      
      <div id="about-me-text">
        <div id="image">
          <img
            src={sanjanaImage}
            alt="Sanjana Mishra"

          />
        </div>
        <div id= "content">
          <h2>Hi, I'm Sanjana!</h2>
          {/* <h4>Graduate Student | Visual Computing Enthusiast</h4> */}

          <p>
            I am super passionate about and intrigued by the dynamic realms of machine learning, deep learning, artificial intelligence, and computer vision. These are areas that continually challenge and inspire me to broaden my knowledge and skills.
          </p>
          <p>
            I am currently a Computer Science Grad Student at Simon Fraser University, specializing in Visual Computing.
          </p>
          <p>
            Coming from a robust educational background in Computer Science and Engineering, I am equipped with a strong foundational understanding of these complex disciplines. This, coupled with my innate creativity, allows me to bring a unique blend of imaginative problem-solving and technical expertise to all the projects I undertake.
          </p>
          <p>
            My goal is to leverage these abilities and interests to contribute meaningfully to my field and constantly push the boundaries of what is possible in Visual Computing.
          </p>
        </div>
        <div id="socials">
          {/* Add your LinkedIn and GitHub links */}
          <a href="https://www.linkedin.com/in/sanjanamishra/" target="_blank" rel="noopener noreferrer">
            LinkedIn <FaLinkedin />
          </a>
          &nbsp;|&nbsp;
          <a href="https://github.com/sanjana-mishra" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div> 
      </div>
    </div>
  );
};

export default About;
