import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import EducationItem from './components/education/EducationItem';
import PublicationItem from './components/publication/PublicationItem';
import ExperienceItem from './components/experience/ExperienceItem';

const root = ReactDOM.createRoot(document.getElementById('root'));


const education = [
  {
    name: "University of Oslo",
    location: "",
    period: "2021-2023",
    gpa: "4.583 / 5.000",
    degree: "M.Sc. in Programming and System Architecture (PROSA)",
    other: [],
  },
  {
    name: "University of Pittsburgh",
    location: "",
    period: "2018-2021",
    gpa: "3.755 / 4.000",
    degree: "B.Sc. in Computer Science", 
    other: [],
  },
  {
    name: "Community College of Allegheny County",
    location: "",
    period: "2017-2018",
    gpa: " 4.000 / 4.000",
    degree: "N/A",
    other: [],
  },
];

const publications = [
  {
    title: "Master of Puppets - How to trick the human mind to explore an infinite world",
    authors: ["Emil M. Kjenstad"],
    publisher: "University of Oslo",
    publish_date: "2023",
    other: []
  },
  {
    title: "Experiencing Rotation and Curvature Gain for Redirected Walking in Virtual Reality",
    authors: ["Emil M. Kjenstad", "more"],
    publisher: "ACM",
    publish_date: "June 2023",
    other: []
  },
]

const experience = [
  {
    role: "Undergraduate Teaching Assistant",
    company: "University of Pittsburgh",
    location: "Pittsburgh, PA, USA",
    period: "Aug. 2020 - May 2021", // Change to start and end date
    other: []
  },
  {
    role: "Meat Wrapper and Sales Clerk",
    company: "Shadyside Market District",
    location: "Pittsburgh, PA, USA",
    period: "Feb. 2017 - Apr. 2021",
    other: []
  },
]

root.render(
  <React.StrictMode>
    <header>
      <h1>Emil M. Kjenstad</h1>
      <p>all links</p>
    </header>

    <section>
      <h1>About Me</h1>
      <p>My objective is to obtain a position to utilize and expand my skills gained from my experience in academia and to be able to contribute to the improvement of products and processes.</p>
    </section>

    <section id="Education">
      <h1>Education</h1>

      {education.map(element => {
        return(<EducationItem school={element} />);
      })}

    </section>

    <section id="Publications">
      <h1>Publications</h1>

      {publications.map(element => {
        return(<PublicationItem publication={element} />);
      })}

    </section>

    <section id="Experience">
      <h1>Experience</h1>

      {experience.map(element => {
        return(<ExperienceItem experience={element} />);
      })}

    </section>

    <section>
      <h1>Skills</h1>
      <p>To Be Inserted</p>
    </section>

    <section>
      <h1>Contact Information</h1>
    </section>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
