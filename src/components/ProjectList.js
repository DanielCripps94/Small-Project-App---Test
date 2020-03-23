import React, { Component } from 'react';

export default class ProjectList extends Component {


    render () {

        const { project } = this.props
        return( 
            <div>
               {project.title}
            </div>
        )
    }

}