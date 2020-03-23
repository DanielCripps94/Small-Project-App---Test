import React, { Component } from 'react';
import API from './API'
import ProjectList from './ProjectList';

class ProjectListContainer extends Component {

    state = {
        projects: []
    }

    componentDidMount () {
        API.getProjects().then(data => this.setState({projects: data}))
    }

    render() { 

        const { projects } = this.state

        return (  
            <div>
                <h1>See projects bellow</h1>
                {projects.map(project => <ProjectList project={project}/>)}
            </div>
        )
    }
}
 
export default ProjectListContainer ;