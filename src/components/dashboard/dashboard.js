import React,{ Component } from 'react';
import Notifications from './Notification';
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import DemoCarousel from '../corosal/corrosal';
import Cards from '../corosal/cards';


class Dashboard extends Component{
    render(){
        //console.log(this.props);
        const { projects } = this.props;
        return(
                 <div>
                     <div>
                 <DemoCarousel />
                 </div>
                 <div>
                     <Cards />
                 </div>
               <div className="dashboard container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className=""></div>
                    <Notifications />
                     </div>
                </div>
                </div>
            )
    }
}
const mapStateToProps = (state)=>{
    console.log(state);
    return {
        projects: state.firestore.ordered.projects
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard)