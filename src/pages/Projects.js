// Projects.js

import React, { useState } from 'react';
import './Projects.css'; 
import p1 from './images/p1.jpeg';
import p2 from './images/p2.jpeg';
import p3 from './images/p3.jpeg';
import p4 from './images/p4.jpeg';
import p5 from './images/p5.jpeg';
import p6 from './images/p6.jpeg';
import p1_2 from './images/p1_2.png';

const projectsData = [
  {
    title: 'Edge-aware Point Cloud Upsampling',
    date: '01/2023 - 04/2023',
    description:
    "In the realm of artificial intelligence, I engineered a convolutional neural network (CNN) using advanced technologies such as PyTorch, COLMAP, and PointNet++. This architecture upscales low-resolution point clouds to detailed high-resolution counterparts while preserving details along the edges. A key innovation is the Magnetic Loss Function—a strategic algorithm designed to 'pull' points towards the edges, ensuring the retention of crucial details. Rigorously evaluated on the S3DIS dataset, the results surpassed the benchmark set by PUNet by an impressive 20%, validating the efficacy of this approach. Explore the intricacies of this technological feat, where precision and innovation converge.",
    image: p1,
    github: "https://github.com/sanjana-mishra/pointcloud-upsampling",
    image2: p1_2,
  },
  {
    title: 'Data Synthesis and Extraction using Nvidia Omniverse',
    date: '10/2022 - 12/2022',
    description:
      'Simulated a digital twin of an outdoor farmstead using UE5, Omniverse to generate trainable data and used this synthetic dataset to train a YOLOv5 network for object detection. Analyzed the training results to conclude that the dataset must contain both synthetic and real-world data for best detection results and to avoid overfitting of the model to synthetic data.',
    image: p2,
    github: "https://github.com/sanjana-mishra/synthetic-visual-dataset-generation"
  },
  {
    title: 'Middle School Architect',
    date: '01/2022 - 05/2023',
    description:
      'Developed a platform in Elm for the construction of buildings to teach young students about coding and math concepts of 3D geometry through computer graphics, visual programming, and high-level math. Collaborated with McMaster University faculty to contribute to the university\'s outreach program through Middle School Architect resulting in an improvement of programming skills for a significant number of students.',
      image: p3,
      github: "https://github.com/sanjana-mishra/clt-creator",
      link2: "https://cltcreator.netlify.app/"
  },
  {
    title: 'COVID‑SCAPE: Crowd Detection using IoT',
    date: '02/2021 - 06/2021',
    description:
      'Developed a real-time crowd detection system using Computer Vision (Python, NumPy, OpenCV, Haar Cascade Features) and IoT for identifying overcrowded areas. Documented high accuracy in people counting across scenes (image and video), validating the system\'s effectiveness.',
      image: p4,
      github: "https://github.com/sanjana-mishra/FlaskSurveillance"
  },
  {
    title: 'Cosmoteem',
    date: '10/2020 - 01/2021',
    description:
      'Developed an astronomy website using Handlebars, Express.JS, JavaScript, CSS3, HTML5, MongoDB, and Unity3D, featuring modules like a forum, news feed, store, gallery, and a Solar System view. Executed front-end development for the website resulting in a 20% increase in user engagement and interaction.',
      image: p5,
      link2: 'https://www.cosmoteem.xyz',

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
            {/* <p>{projectsData[selectedProject].date}</p> */}
            <p>{projectsData[selectedProject].description}</p>
            <img
              src={projectsData[selectedProject].image2}
              className="project-image2"
            />
            {projectsData[selectedProject].github && (
            <a href={projectsData[selectedProject].github} target="_blank" rel="noopener noreferrer">
              View this project on GitHub 
            </a>
          )}
            {projectsData[selectedProject].link2 && (
              <a href={projectsData[selectedProject].link}>Visit the Website</a>
            )}
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