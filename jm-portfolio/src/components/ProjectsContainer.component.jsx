import React from 'react';
import AnimatedCard from './AnimatedCard.component';
import './ProjectsContainer.styles.css';



const ProjectsContainer = ({projectUrls}) => {
    return (
        <section id="projects">
            <div className="projects-wrapper">
            {
                projectUrls.map((projectUrl, i) => {
                    return (
                        <AnimatedCard projectUrl={projectUrl[i]} />
                    );
                })
            }
            </div>
        </section>
    )
}

export default ProjectsContainer;