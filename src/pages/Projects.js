// Projects.js

import React, { useState } from 'react';
import './Projects.css'; 
import p1 from './images/p1.jpeg';
import p2 from './images/p2.jpeg';
import p3 from './images/p3.jpeg';
import p4 from './images/p4.jpeg';
import p5 from './images/p5.jpeg';
import p6 from './images/p6.jpeg';

const projectsData = [
  {
    title: 'Edge-aware Point Cloud Upsampling',
    date: '01/2023 - 04/2023',
    description:
      'Developed a CNN that takes in a low resolution point cloud as an input and produces a high resolution point cloud whilst being mindful of the edges using PyTorch, COLMAP and PointNet++ point cloud model. Devised a novel Loss Function, Magnetic Loss, which performs a “pulling” action on the points towards the edges based on distance. Trained and tested on S3DIS dataset with results at par with (some surpassing) state-of-the-art upsampling models.',
    image: p1,
  },
  {
    title: 'Data Synthesis and Extraction using Nvidia Omniverse',
    date: '10/2022 - 12/2022',
    description:
      'Simulated a digital twin of an outdoor farmstead using UE5, Omniverse to generate trainable data and used this synthetic dataset to train a YOLOv5 network for object detection. Analyzed the training results to conclude that the dataset must contain both synthetic and real-world data for best detection results and to avoid overfitting of the model to synthetic data.',
      image: p2,
  },
  {
    title: 'Middle School Architect',
    date: '01/2022 - 05/2023',
    description:
      'Developed a platform in Elm for the construction of buildings to teach young students about coding and math concepts of 3D geometry through computer graphics, visual programming, and high-level math. Collaborated with McMaster University faculty to contribute to the university\'s outreach program through Middle School Architect resulting in an improvement of programming skills for a significant number of students.',
      image: p3,
  },
  {
    title: 'COVID‑SCAPE: Crowd Detection using IoT',
    date: '02/2021 - 06/2021',
    description:
      'Developed a real-time crowd detection system using Computer Vision (Python, NumPy, OpenCV, Haar Cascade Features) and IoT for identifying overcrowded areas. Documented high accuracy in people counting across scenes (image and video), validating the system\'s effectiveness.',
      image: p4,
  },
  {
    title: 'Cosmoteem',
    date: '10/2020 - 01/2021',
    description:
      'Developed an astronomy website using Handlebars, Express.JS, JavaScript, CSS3, HTML5, MongoDB, and Unity3D, featuring modules like a forum, news feed, store, gallery, and a Solar System view. Executed front-end development for the website resulting in a 20% increase in user engagement and interaction.',
      image: p5,
  },
  {
    title: 'Implementing Security in IoT systems via Blockchain (Publication)',
    date: 'Published: 12/2022',
    description:
      'Proposed the integration of Blockchain into current cloud-based IoT systems to fortify their security, following a comprehensive analysis of prevailing security concerns within a weather detection system.',
    link: 'https://www.inderscienceonline.com/doi/abs/10.1504/IJITST.2023.127391',
    image: p6,
  },
];


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (index) => {
    setSelectedProject(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="projects">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project-item"
            onClick={() => openModal(index)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-title">
              <h3>{project.title}</h3>
              {/* <p>{project.date}</p> */}
            </div>
          </div>
        ))}
      </div>
      {selectedProject !== null && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{projectsData[selectedProject].title}</h2>
            <p>{projectsData[selectedProject].date}</p>
            <p>{projectsData[selectedProject].description}</p>
            {projectsData[selectedProject].link && (
              <a href={projectsData[selectedProject].link}>Read more</a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;