import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <header>
                <Link to='./projects'><h1>Project List</h1></Link>
                <Link to='./userproject'><h1> Project Update</h1></Link>
                <Link to='./create'><h1>Start New Project</h1></Link>
                </header>
            </div>
        )
    }
}