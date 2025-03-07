import { useState, useEffect, useRef } from 'react';
import '../styles/projectcard.css'

const ProjectCard = ({ projectTitle, link, image, children }) => {
    // When the project card is clicked on take user to the {link}

    return (
        <div className="projectCardContainer">
            <img src={image} alt="Project Image" className="projectImage" />
            <a href={link} > <h2 className="projectTitle">{projectTitle}</h2> </a> 
            <p className="projectDescription">{children}</p>
        </div>
    )
}

export default ProjectCard