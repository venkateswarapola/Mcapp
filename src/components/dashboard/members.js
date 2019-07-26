import React,{ Component } from 'react';
import ProjectcopyList from '../projectscopy/ProjectcopyList'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Members extends Component{
    render(){
        const { projectcopys } = this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col-md-2 col-md-offset-5">
                        <ProjectcopyList projectcopys={projectcopys}/>
                    </div>
                    <div className=""></div>
                </div>
            </div>
            
        )
    }
}
const mapStateToProps = (state)=>{
    console.log(state);
    return {
        projectcopys: state.firestore.ordered.projectcopys
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projectcopys'}
    ])
)(Members)