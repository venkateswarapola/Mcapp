import React from 'react';
import Card from 'react-bootstrap/Card'

const ProjectcopySummary =({projectcopy})=>{
    return(
       
           /* <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-tite">{projectcopy.title}</span>
                    <p>Posted By MATHS CLUB</p>
                    <p className="grey-text">@SASTRA UNIVERSITY</p>
                </div>
            </div>*/
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={"https://drive.google.com/uc?export=view&id="+projectcopy.imageurl} />
            <Card.Body>
            <Card.Title>{projectcopy.title}</Card.Title>
            <Card.Text>
               {projectcopy.content}
             </Card.Text>
            </Card.Body>
            </Card>
       
    )
}

export default ProjectcopySummary;