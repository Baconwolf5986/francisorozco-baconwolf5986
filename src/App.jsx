import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectCard from './components/ProjectCard'

function App() {
  const [count, setCount] = useState(0)

  /*
                    <div className="titleCard">
                      <div className="titles">
                          <h1 className="nameTitle">Francis Orozco</h1>
                          <h2 className="usernameTitle">Baconwolf5986</h2>
                      </div>
                  </div>
              <p className="aboutContainer">
                  Hi I'm Francis Orozco! I'm currently a Computer Science student at UF who's'
                  interested in computer graphics and web development.
                  I enjoy coding, games and solving problems.
              </p>
                            <div className="footer">
                  <a href="https://github.com/baconwolf5986"> Github </a>
                  <a href="https://www.linkedin.com/in/francis-orozco-419521292/"> Linkedin</a>
                  <a href="mailto:francisorozco12@gmail.com">Gmail</a>
              </div>
  */

  return (
      <div className="mainContainer">
          <div className="leftContainer">

          <div className="profileContainer" >
              <div className="imgBackground" ></div>
                  <div className="orangeBar"></div>
                  <img
                      src="/profile_no_background.png" // Replace with the path to your image
                      alt="Profile"
                      className="profileImage"
                  />

              </div>

              <div className="titles">
                  <h1 className="nameTitle">Francis Orozco</h1>
                  <h2 className="usernameTitle">Baconwolf5986</h2>
              </div>

          </div>
          <div className="rightContainer">

              <div className="LinksHalf">
                  <h1 className="Header"> LINKS </h1>
                      <div className="links">
                      <a href="https://github.com/baconwolf5986" className="link"> <img src="/github-mark.svg" className="linkLogo"/>Github </a>
                      <a href="https://www.linkedin.com/in/francis-orozco-419521292/" className="link"><img src="/LI-In-Bug.png" className="linkLogo" /> Linkedin</a>
                      <a href="mailto:francisorozco12@gmail.com" className="link"> <img src="/gmail-logo.svg" className="linkLogo" />Gmail</a>
                  </div>
              </div>

        <div className="ProjectHalf">
        <h1 className="Header"> PROJECTS </h1>
          <div className="projectsContainer">
              <ProjectCard
                  projectTitle="kpople.net"
                  link="https://www.kpople.net"
                  image="/kpople.png"
              >
                    A full stack web application. A daily wordle-like game for kpop fans. A <span className="traitHighlight"> React, Vite frontend </span> using a firebase firestore database.
                    A<span className="traitHighlight"> Node.js, Express.js server </span> secured with cors and helmet.
                    Hosted using <span className="traitHighlight"> nginx on an AWS EC2 </span> instance.
              </ProjectCard>
              <ProjectCard
                  projectTitle="Driver-Dilemma"
                  link="https://ufethics-team2-driver-dilemma.netlify.app/"
                  image="/driverdilemma.png"
              >
                  A website hosted to tackle the ethical questions of autonomous vehicles. A <span className="traitHighlight"> React, Vite frontend </span>
                  A <span className="traitHighlight"> firebase firestore database </span> to poll users on ethical issues.
              </ProjectCard>
              <ProjectCard
                  projectTitle="FencingQueue Bot"
                  link="https://github.com/Baconwolf5986/FencingQueue-TelegramBot"
                  image="/fencingqueuebot.png"
              >
                  A telegram bot used by the UF Fencing club to manage queues for fencing bouts. Created using <span className="traitHighlight">tgbot-cpp API</span> in C++.
              </ProjectCard>
              <ProjectCard
                  projectTitle="DirectX12 - BaconBox"
                  link="https://github.com/Baconwolf5986/BaconBox"
                  image="/kpople.png"
              >
                  A rendering engine built to test rendering techniques on Windows. Built to learn modern graphics APIs and rendering techniques.
                    A <span className="traitHighlight"> DirectX12 </span> rendering engine built in C++
              </ProjectCard>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default App
