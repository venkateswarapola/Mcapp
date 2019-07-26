import React from 'react';
import ProjectcopySummary from './ProjectcopySummary'
import { Link } from 'react-router-dom'

const ProjectcopyList =({projectcopys})=>{
    return(
        <div className="project-list section">
           { projectcopys && projectcopys.map(projectcopy =>{
               return (
                   <Link to={'/project/'+projectcopy.id}  key={projectcopy.id}>
                   <ProjectcopySummary projectcopy={projectcopy} />
                   </Link>
               )
           })}
        </div>
        
    )
}

export default ProjectcopyList; 