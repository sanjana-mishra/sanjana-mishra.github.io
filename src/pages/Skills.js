// Skills.js

import React, { useEffect, useRef } from 'react';
import './Skills.css';  // Make sure to adjust the path based on your file structure
import machineLearningIcon from './machineLearningIcon.png'; 
import computerVisionIcon from './computerVisionIcon.png'; 
import softwareEngineeringIcon from './softwareEngineeringIcon.png'; 
import pythonIcon from './pythonIcon.png'; 
import cIcon from './cIcon.png'; 
import cppIcon from './cppIcon.png'; 
import jsHtmlCssIcon from './jsHtmlCssIcon.png'; 
import nodeJsIcon from './nodeJsIcon.png'; 
import pytorchIcon from './pytorchIcon.png'; 
import opencvIcon from './opencvIcon.png'; 
import unityIcon from './unityIcon.png'; 
import ueIcon from './ueIcon.png'; 



const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (skillsRef.current) {
        const skillsContainerTop = skillsRef.current.getBoundingClientRect().top;

        if (skillsContainerTop < window.innerHeight / 1.5) {
          skillsRef.current.classList.add('show-skills');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div id="skills">
      <h1 style={{ fontSize: '3vh' }}>My Skills</h1>
      <div className="skills-container">
        <div className="skills-box">
          <img src={machineLearningIcon} alt="Machine Learning" style={{ filter: 'invert(85%)' }}/>
          <p>Machine Learning</p>
        </div>
        <div className="skills-box">
          <img src={computerVisionIcon} alt="Computer Vision" />
          <p>Computer Vision</p>
        </div>
        <div className="skills-box">
          <img src={pytorchIcon} alt="PyTorch" />
          <p>PyTorch</p>
        </div>
        <div className="skills-box">
          <img src={opencvIcon} alt="OpenCV" />
          <p>OpenCV</p>
        </div>
        <div className="skills-box">
          <img src={pythonIcon} alt="Python" />
          <p>Python</p>
        </div>
        <div className="skills-box">
          <img src={softwareEngineeringIcon} alt="Software Engineering" />
          <p>Software Engineering</p>
        </div>
        <div className="skills-box">
          <img src={jsHtmlCssIcon} alt="JavaScript, HTML, CSS" />
          <p>JavaScript, HTML, CSS</p>
        </div>
        <div className="skills-box">
          <img src={nodeJsIcon} alt="Node.js" />
          <p>Node.js</p>
        </div>
        <div className="skills-box">
          <img src={cppIcon} alt="C++" style={{ filter: 'invert(70%)' }}/>
          <p>C++</p>
        </div>
        <div className="skills-box">
          <img src={cIcon} alt="C" />
          <p>C</p>
        </div>
        <div className="skills-box">
          <img src={unityIcon} alt="Unity3D" />
          <p>Unity</p>
        </div>
        <div className="skills-box">
          <img src={ueIcon} alt="Unreal Engine" style={{ filter: 'invert(80%)' }}/>
          <p>Unreal Engine</p>
        </div>

        {/* Add more skills as needed */}
      </div>
    </div>
  );
};

export default Skills;
