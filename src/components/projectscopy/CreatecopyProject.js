import React,{Component} from 'react';
import {connect} from 'react-redux'
import {createcopyProject} from '../../store/actions/projectcopyActions'

class CreatecopyProject extends Component{
    state={
        title: '',
        content:'',
        imageurl:''
  
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value

        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.createcopyProject(this.state)
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <label htmlFor="imageurl">Image URL GOOGLE DRIVE ONLY</label>
                        <input id="imageurl" type="text" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className ="btn pink lighten-1 z-depth-0">
                            Create
                        </button>
                    </div>
                </form>

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        createcopyProject: (projectcopy) => dispatch(createcopyProject(projectcopy))
    
    }
}

export default connect(null,mapDispatchToProps)(CreatecopyProject);