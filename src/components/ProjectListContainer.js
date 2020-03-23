import React, { Component } from 'react';
import API from './API'

class ProjectListContainer extends Component {

    state = {
        projects: []
    }

    // fetchProjects = () => {
    //     fetch('http://localhost:5000/projects').then(resp => resp.json()).then(data => this.setState({projects: data}))
    // }

    // componentDidMount () {
    //     this.fetchProjects()
    // }

    componentDidMount () {
        API.getProjects().then(data => this.setState({projects: data}))
    }


    render() { 
        return (  
            <div>
                <h1>See projects bellow</h1>

            </div>
        )
    }
}
 
export default ProjectListContainer ;