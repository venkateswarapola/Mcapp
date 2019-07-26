import React from 'react';

const ProjectSummary =({project})=>{
    return(
       
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-tite">{project.title}</span>
                    <p>Posted By MATHS CLUB</p>
                    <p className="grey-text">@SASTRA UNIVERSITY</p>
                </div>
            </div>
       
    )
}

export default ProjectSummary;