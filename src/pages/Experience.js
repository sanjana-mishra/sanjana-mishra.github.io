// Experience.js

import React, { useEffect } from 'react';
import './Experience.css';
import hypotheticLogo from './hypothetic_logo.jpeg'; 
import memerakiLogo from './meraki_logo.jpeg'; 
import iceLogo from './ICE_logo.jpeg'; 

const Experience = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline li");

    function isItemInView(item) {
      var rect = item.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isItemInView(items[i])) {
          items[i].classList.add("show");
        }
      }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    // clean up event listeners
    return () => {
      window.removeEventListener("load", callbackFunc);
      window.removeEventListener("resize", callbackFunc);
      window.removeEventListener("scroll", callbackFunc);
    };
  }, []);

  return (
    <div id = "exp">
      <h1>My Experience</h1>
      <div>
        <ul className="timeline">
          <li>
            <div>
              <img src={hypotheticLogo} alt="Company Logo" class="logo"/> 
              <h3>Hypothetic</h3>
              <h4>Machine Learning Engineer Co-op</h4>
              <time>05/2023 - 12/2023</time>
              <p>
                Engineered and implemented a streamlined pipeline, covering 3D data preprocessing and leveraging prompt engineered VLMs, Multimodal LLMs, for auto-captioning, auto-tagging, and generating CLIP and text embeddings. Achieved a significant 30% higher search accuracy rate, enhancing the efficiency of the smart-search functionality.
              </p>
              <p>
                Developed a CNN through PyTorch and Kaolin (graphics library) for Physically Based Rendering (PBR) texture generation from octree geometries using diffusion. Introduced novel pooling functions and optimizations to enhance feature capture resulting in a 10% reduction in processing time.
              </p>
              <p>
                Collaborated in crafting a task-oriented assistant for easily carrying out functions, integrating front-end aspects for enhanced usability, resulting in considerable overall task efficiency and user satisfaction.
              </p>
              <p id = "tools">
                <ul>Machine Learning </ul>
                <ul>NLP </ul>
                <ul>VLMs/LLMs </ul>
                <ul>Python </ul>
                <ul>PyTorch </ul>
                <ul>Kaolin </ul>
                
                
              </p>                
            </div>
          </li>
          <li>
            <div>
              <img src={memerakiLogo} alt="Company Logo" class="logo"/> 
              <h3>MeMeraki</h3>
              <h4>Software Development Intern</h4> 
              <time>06/2021 - 09/2021</time>
              <p>
                Developed the redesigned company website using JavaScript, Liquid, HTML5, and CSS3 resulting in a 50% increase in user engagement through the implementation of an intuitive interface and updated design.
               </p>
              <p>
                Collaborated in developing an advanced course organization platform that improved the learning experience and increased accessibility for local Indian artisans.
              </p>
              <p>
                Improved platform usability by 15% by integrating essential features like filtering options, chat, and a rewards program resulting in significant customer retention, thereby increasing revenue for MeMeraki.
              </p>
              <p id = "tools">
                <ul>Software Development </ul>
                <ul>JavaScript </ul>
                <ul>HTML5 </ul>
                <ul>CSS3 </ul>
                <ul>Liquid  </ul>
              </p> 
              
            </div>
          </li>
          <li>
            <div>
              <img src={iceLogo} alt="Company Logo" class="logo"/> 
              <h3>ICE Information Technology</h3>
              <h4>Technology Intern</h4>
              <time>05/2019 - 07/2019</time>
              
              <p>
                Provided strategic insights on ISO 27000 and 27001 frameworks, contributing to client presentations for product purchase through comprehensive exploration of VAPT, and security devices like firewalls, IDS, IPS, and SIEM.
              </p>
              <p id = "tools">
                <ul>Cyber Security </ul>
                <ul>Research</ul>
              </p> 
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
