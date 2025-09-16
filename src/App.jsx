import { useState } from 'react';
import './App.css';
import ProjectCard from './components/ProjectCard';
import profileImage from '/profile_no_background.png';
import githubLogo from '/github-mark.svg';
import linkedinLogo from '/LI-In-Bug.png';
import gmailLogo from '/gmail-logo.svg';
import kpopleImage from '/kpople.png';
import wordleCloneImage from '/wordleclone.png';
import studyDuelImage from '/studyduel.png';
import directXImage from '/directx.png';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="mainContainer">
            <div className="leftContainer">
                <div className="profileContainer">
                    <div className="imgBackground"></div>
                    <div className="orangeBar"></div>
                    <img
                        src={profileImage} // Use the imported image
                        alt="Profile"
                        className="profileImage"
                    />
                    <div className="titles">
                        <h1 className="nameTitle">Francis Orozco</h1>
                        <h2 className="usernameTitle">Baconwolf5986</h2>
                    </div>
                </div>

                <div className="LinksHalf">
                    <div className="links">
                        <a href="https://github.com/baconwolf5986" className="link">
                            <img src={githubLogo} className="linkLogo" alt="GitHub" />
                            Github
                        </a>
                        <a href="https://www.linkedin.com/in/francis-orozco-419521292/" className="link">
                            <img src={linkedinLogo} className="linkLogo" alt="LinkedIn" />
                            Linkedin
                        </a>
                        <a href="mailto:francisorozco12@gmail.com" className="link">
                            <img src={gmailLogo} className="linkLogo" alt="Gmail" />
                            Gmail
                        </a>
                    </div>
                </div>
            </div>

            <div className="rightContainer">
                <div className="ProjectHalf">
                    <h1 className="Header">PROJECTS</h1>
                    <div className="projectsContainer">
                        <ProjectCard
                            projectTitle="kpople.net"
                            link="https://www.kpople.net"
                            image={kpopleImage}
                        >
                            A full stack web application. A daily wordle-like game for kpop fans. A{' '}
                            <span className="traitHighlight">React.js, frontend</span> using a firebase
                             database and <span className="traitHighlight"> AWS S3 </span> and <span className="traitHighlight"> Cloudflare CDN</span> for image service.  A{' '}
                            <span className="traitHighlight">Node.js, Express.js server</span> secured with
                            cors. Hosted using{' '}
                            <span className="traitHighlight"> AWS EC2 </span> instance.
                        </ProjectCard>
                        <ProjectCard
                            projectTitle="Wordle Clone"
                            link="https://wordle-eight-henna.vercel.app/"
                            image={wordleCloneImage}
                        >
                             A <span className="traitHighlight">React.js frontend, </span>to mimic wordle's logic and stat storage.
                                 uses <span className="traitHighlight">Node.js, Firebase </span> for 
                            <span className="traitHighlight"> NoSQL </span> 
                            database and <span className="traitHighlight"> Google Authentication</span>.
                        </ProjectCard>
                        <ProjectCard
                            projectTitle="Study Duel"
                            link="https://gamification-bbez18eea-baconwolf5986s-projects.vercel.app/"
                            image={studyDuelImage}
                        >
                            A <span className="traitHighlight"> React.js </span> full-stack app for users to test their knowledge against friends
                            using user created quizzes. Real-time gameplay implemented with <span className="traitHighlight">Node.js and Socket.io</span>. 
                            Uses <span className="traitHighlight">AWS Lambda and MongoDB</span> for storing/getting user data and quizzes.

                        </ProjectCard>
                        <ProjectCard
                            projectTitle="DirectX12 - BaconBox"
                            link="https://github.com/Baconwolf5986/BaconBox"
                            image={directXImage}
                        >
                            A rendering engine built to test rendering techniques on Windows. Built to learn
                            modern graphics APIs and rendering techniques. A{' '}
                            <span className="traitHighlight">DirectX12</span> rendering engine built in <span className="traitHighlight">C++</span>.
                        </ProjectCard>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;