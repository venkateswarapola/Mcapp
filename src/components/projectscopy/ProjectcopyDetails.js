import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


const ProjectcopyDetails =(props)=>{
    const { projectcopy }=props;
    if (projectcopy){
        return(
        <div className="container section project-details">
           <div className="card z-depth-0">
               <div className="card-content">
                   <span className="card-title">{ projectcopy.title }</span>
                   <p>{ projectcopy.content }</p>
               </div>
               <div className="card-action gret lighten-4 grey-text">
                   <div>posted { projectcopy.authorFirstName} {projectcopy.authorLastName}</div>
                   
               </div>
           </div>
       </div>
        )
 
    }else {
        return(
            <div className="container center">
                <p>Loading Project...</p>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps) => {
    console.log(state);
    const id=ownProps.match.params.id;
    const projectcopys = state.firestore.data.projectcopys;
    const projectcopy = projectcopys ? projectcopys[id] : null
    return{
        projectcopy: projectcopy
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projectcopys'}
    ])
)(ProjectcopyDetails); 